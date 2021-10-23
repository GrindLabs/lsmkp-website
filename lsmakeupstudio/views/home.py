from flask import Blueprint
from flask import current_app as app
from flask import render_template
from lsmakeupstudio.models.user import User as UserModel

home = Blueprint('home', __name__)


@home.route('/')
def index():
    return render_template('home/index.html')


# @home.route('/<username>')
# def public_profile(username):
    # user = UserModel.query.filter_by(username=username).first_or_404()
    # model = ModelSchema().dump(user)
    # logger = app.config['LOGGER']
    # logger.debug(model)
    # return render_template('public_profile.html', model=model)
    # pass
