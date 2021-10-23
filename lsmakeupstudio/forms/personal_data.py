from flask_wtf import FlaskForm
from wtforms.fields import SelectField, StringField
from wtforms.fields.html5 import TelField, DateField
from wtforms.validators import DataRequired, Length


class PersonalData(FlaskForm):
    first_name = StringField(
        'Nome',
        [
            DataRequired('Por favor, informe o seu nome.'),
            Length(2, 20, 'Seu nome deve ter entre %(min)d e %(max)d caracteres.'),
        ]
    )
    last_name = StringField(
        'Sobrenome',
        [
            DataRequired('Por favor, informe o seu sobrenome.'),
            Length(2, 20, 'Seu sobrenome deve ter entre %(min)d e %(max)d caracteres.'),
        ]
    )
    birthday = DateField(
        'Data de Nascimento',
        [
            DataRequired('Por favor, informe a data do seu nascimento.'),
        ]
    )
    genre = SelectField(
        'Gênero',
        [
            DataRequired('Por favor, selecione o seu gênero.'),
        ],
        choices=[
            ('man', 'Homem Cis'),
            ('woman', 'Mulher Cis'),
            ('intersex', 'Intersexual'),
            ('transwoman', 'Mulher Trans'),
            ('transman', 'Homem Trans'),
            ('trans', 'Travesti'),
            ('nb', 'Não Binário'),
        ],
        render_kw={'placeholder': 'Selecione seu gênero...'}
    )
    orientation = SelectField(
        'Orientação Sexual',
        [
            DataRequired('Por favor, selecione a sua orientação sexual.'),
        ],
        choices=[
            ('hetero', 'Heterossexual'),
            ('asex', 'Assexual'),
            ('gay', 'Gay'),
            ('lesb', 'Lésbica'),
            ('bisex', 'Bissexual'),
            ('pansex', 'Pansexual'),
            ('polisex', 'Polissexual'),
        ],
        default='Selecione sua orientação...'
    )
    phone = TelField(
        'Celular',
        [
            DataRequired('Por favor, informe um número de celular válido.'),
            Length(11, 11, message='Número máximo de %(max)d caracteres excedido.'),
        ],
        description='Informe apenas os números do DDD e celular.'
    )
