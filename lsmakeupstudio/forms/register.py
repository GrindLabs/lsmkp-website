import re

from flask_wtf import FlaskForm
from lsmakeupstudio.models.user import User as UserModel
from wtforms import PasswordField, StringField
from wtforms.fields.html5 import EmailField
from wtforms.fields.simple import SubmitField
from wtforms.validators import (DataRequired, Email, EqualTo, Length, Regexp,
                                ValidationError)


class Register(FlaskForm):
    email = EmailField(
        'Email',
        [
            DataRequired('Por favor, informe seu email.'),
            Email('Por favor, use um email válido.'),
            Length(max=255, message='Email muito longo, por favor tente outro.')
        ]
    )
    username = StringField(
        'Nome de Usuário',
        [
            DataRequired('Por favor, informe seu nome de usuário.'),
            Length(
                4, 25, 'O nome de usuário deve ter entre %(min)d a %(max)d caracteres.'),
            Regexp(
                '[a-zA-Z0-9_\-\.]+',
                re.IGNORECASE,
                'O nome de usuário pode conter letras, números, "_", "-" e ".".'
            )
        ]
    )
    password = PasswordField(
        'Senha',
        [
            DataRequired('Por favor, informe sua senha.'),
            Length(4, 16, 'A senha deve ter entre %(min)d a %(max)d caracteres.'),
            EqualTo(
                'confirm',
                'As senhas não conferem.'
            )
        ]
    )
    confirm = PasswordField(
        'Confirme a Senha',
        [
            DataRequired('Por favor, confirme sua senha.'),
            EqualTo(
                'password',
                'As senhas não conferem.'
            ),
            Length(4, 16, 'A senha deve ter entre %(min)d a %(max)d caracteres.')
        ]
    )
    submit = SubmitField('Cadastrar')

    def validate_email(form, field):
        if UserModel.query.filter_by(email=field.data).first():
            raise ValidationError('Este e-mail já está cadastrado.')

    def validate_username(form, field):
        if UserModel.query.filter_by(username=field.data).first():
            raise ValidationError('Este nome de usuário já está cadastrado.')
