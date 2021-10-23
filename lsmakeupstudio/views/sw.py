from flask import Blueprint, render_template, request
from lsmakeupstudio.forms.personal_data import PersonalData as PersonalDataForm

sw = Blueprint('models', __name__, url_prefix='/models')


@sw.route('/')
def index():
    return render_template('sw/index.html')


@sw.route('/register')
def register():
    form = PersonalDataForm()
    step = request.args.get('step')

    return render_template('sw/register/index.html', form=form, step=step)
