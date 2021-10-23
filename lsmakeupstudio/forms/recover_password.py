from flask_wtf import FlaskForm
from wtforms.fields.simple import PasswordField, SubmitField
from wtforms.validators import DataRequired, EqualTo, Length


class RecoverPassword(FlaskForm):
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
    submit = SubmitField('Atualizar')
