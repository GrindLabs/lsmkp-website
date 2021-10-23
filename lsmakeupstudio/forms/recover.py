from flask_wtf import FlaskForm
from wtforms.fields.html5 import EmailField
from wtforms.fields.simple import SubmitField
from wtforms.validators import DataRequired, Email, Length


class Recover(FlaskForm):
    email = EmailField(
        'Email',
        [
            DataRequired('Por favor, informe seu email.'),
            Email('Por favor, use um email válido.'),
            Length(max=255, message='Email muito longo, por favor tente outro.')
        ]
    )
    submit = SubmitField('Recuperar')
