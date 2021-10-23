from flask import Blueprint
from flask import current_app as app
from flask import redirect, render_template, url_for
from flask.globals import request
from flask.helpers import flash
from flask_login import current_user
from flask_login.utils import login_user, logout_user
from itsdangerous import TimedJSONWebSignatureSerializer as JWS
from lsmakeupstudio import bcrypt, db
from lsmakeupstudio.forms.login import Login as LoginForm
from lsmakeupstudio.forms.recover import Recover as RecoverForm
from lsmakeupstudio.forms.recover_password import \
    RecoverPassword as RecoverPasswordForm
from lsmakeupstudio.forms.register import Register as RegisterForm
from lsmakeupstudio.models.user import User as UserModel
from lsmakeupstudio.utils import mail as MailUtils
from lsmakeupstudio.utils import url as URLUtils
from sqlalchemy import or_

accounts = Blueprint('accounts', __name__, url_prefix='/accounts')


@accounts.route('/login', methods=['GET', 'POST'])
def login():
    logger = app.config['LOGGER']

    if current_user.is_authenticated:
        return redirect(url_for('home.index'))

    form = LoginForm()

    if form.validate_on_submit():
        user = UserModel.query.filter(
            or_(
                UserModel.username == form.login.data,
                UserModel.email == form.login.data
            )
        ).first()

        if not user or not bcrypt.check_password_hash(user.password, form.password.data):
            logger.debug('Invalid username or password')
            flash('Login ou senha inválido.', 'danger')
        elif not login_user(user, remember=form.remember_me.data):
            logger.debug('Unable to login')
            flash('Não foi possível realizar o login.', 'warning')
        elif request.args.get('next') and URLUtils.is_safe_url(request, request.args.get('next')):
            logger.debug('Redirecting to: %s', request.args.get('next'))
            return redirect(request.args.get('next'))
        else:
            logger.debug('Login success')
            return redirect(url_for('home.index'))

    return render_template('accounts/login.html', form=form)


@accounts.route('/register', methods=['GET', 'POST'])
def register():
    logger = app.config['LOGGER']
    logger.debug('Entering on Account Register route...')
    form = RegisterForm()

    if form.validate_on_submit():
        logger.debug('Account Register form validated successfully')
        user = UserModel()
        form.populate_obj(user)
        user.password = bcrypt.generate_password_hash(form.password.data)
        db.session.add(user)
        db.session.commit()
        logger.debug('User registered successfully')

        if login_user(user):
            logger.debug('Redirecting the user to home...')
            return redirect(url_for('home.index'))

        logger.warning(
            'Unable to log in the user automatically after registration')
        flash('Não foi possível realizar o login automaticamente.', 'warning')
        return redirect(url_for('accounts.login'))

    return render_template('accounts/register.html', form=form)


@accounts.route('/recover', methods=['GET', 'POST'])
def recover():
    logger = app.config['LOGGER']
    form = RecoverForm()

    if form.validate_on_submit():
        user = UserModel.query.filter_by(email=form.email.data).first()

        if user:
            token_serializer = JWS(
                app.config['SECRET_KEY'], expires_in=app.config['JWS_RECOVER_TOKEN_EXPIRATION'])
            token = token_serializer.dumps(
                {'uuid': str(user.uuid)}).decode('utf-8')
            logger.debug('Recover token: %s', token)

            if not MailUtils.recover(user.email, url_for('accounts.password', token=token)):
                logger.error(
                    'Unable to send the recover email to %s' % user.email)

        flash('Email enviado com sucesso!', 'success')
        return redirect(url_for('accounts.login'))

    return render_template('accounts/recover.html', form=form)


@accounts.route('/password/<token>', methods=['GET', 'POST'])
def password(token):
    token_serializer = JWS(app.config['SECRET_KEY'])

    try:
        data = token_serializer.loads(token)
    except:
        return render_template('accounts/recover_password.html', form=None)

    form = RecoverPasswordForm()

    if form.validate_on_submit():
        user = UserModel.query.filter_by(uuid=data.get('uuid')).first_or_404()
        user.password = bcrypt.generate_password_hash(form.password.data)
        db.session.commit()
        flash('Senha alterada com sucesso!', 'success')
        return redirect(url_for('accounts.login'))

    return render_template('accounts/recover_password.html', form=form)


@accounts.route('/logout')
def logout():
    logout_user()
    flash('Você saiu da sua conta.', 'success')
    return redirect(url_for('accounts.login'))
