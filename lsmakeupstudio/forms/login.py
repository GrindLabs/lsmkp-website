from flask_wtf import FlaskForm
from wtforms import BooleanField, PasswordField, StringField
from wtforms.fields.simple import SubmitField
from wtforms.validators import DataRequired, Length


class Login(FlaskForm):
    login = StringField(
        'Email ou Nome de Usuário',
        [
            DataRequired('Por favor, informe seu email ou nome de usuário.'),
            Length(4, 255, message='Número de caracteres inválido.')
        ]
    )
    password = PasswordField(
        'Senha',
        [
            DataRequired('Por favor, informe sua senha.'),
            Length(4, 16, 'A senha deve ter entre %(min)d a %(max)d caracteres.')
        ]
    )
    remember_me = BooleanField('Lembrar de mim')
    submit = SubmitField('Entrar')
