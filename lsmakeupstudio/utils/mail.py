from flask import current_app as app
from mailjet_rest import Client

mailjet = Client(auth=(app.config['MAILJET_API_KEY'],
                       app.config['MAILJET_SECRET_KEY']), version='v3.1')
data = {'Messages': []}


def recover(recipient_email, url_path):
    data.get('Messages').insert(0, {
        'From': {
            'Email': app.config['MAILJET_DEFAULT_EMAIL'],
            'Name': app.config['MAILJET_DEFAULT_NAME']
        },
        'To': [
            {
                'Email': recipient_email,
                'Name': recipient_email
            }
        ],
        'Subject': 'Recuperação de senha',
        'TextPart': '''
        Parece que alguém está tentando modificar a sua senha. Caso não seja você, apenas ignore esse e-mail, caso contrário siga os passos abaixo:
        
        1) Clique nesse link ou copie e cole no seu navegador: {0}{1};
        2) Siga os passos na tela que irá aparecer para trocar a sua senha; e,
        3) Faça o login novamente com a sua nova senha.
        
        Atenciosamente,
        Equipe Skinky App.
        '''.format(app.config['BASE_URL'], url_path),
        'HTMLPart': '''
        <p>Parece que alguém está tentando modificar a sua senha. Caso não seja você, apenas ignore esse e-mail, caso contrário siga os passos abaixo:</p>
        <ul>
            <li>1) Clique nesse link ou copie e cole no seu navegador: <a href="{0}{1}" target="_blank">{0}{1}</a>;</li>
            <li>2) Siga os passos na tela que irá aparecer para trocar a sua senha; e,</li>
            <li>3) Faça o login novamente com a sua nova senha.</li>
        </ul>
        <p>Atenciosamente,<br/>Equipe Skinky App.</p>
        '''.format(app.config['BASE_URL'], url_path)
    })
    result = mailjet.send.create(data=data)

    if result.status_code != 200:
        return False

    return True
