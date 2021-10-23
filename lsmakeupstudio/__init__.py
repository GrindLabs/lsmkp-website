from flask import Flask
from flask.logging import default_handler
from flask_assets import Bundle, Environment
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
bcrypt = Bcrypt()
assets = Environment()
login_manager = LoginManager()


# Custom bundles
theme_js = Bundle(
    'theme/js/disable_submit.js',
    'theme/js/trigger_toasts.js',
    filters=('uglifyjs', 'jsmin'),
    output='js/theme.min.js'
)
theme_css = Bundle(
    'theme/scss/theme.scss',
    filters=('libsass', 'cssmin'),
    output='css/theme.min.css'
)


def create_app():
    """Setup and create the application instance

    Returns:
        Flask: The application instance
    """
    app = Flask(__name__)

    with app.app_context():
        # Initial setup
        app.config.from_object('config')
        app.logger.removeHandler(default_handler)

        # Inject context variables
        from lsmakeupstudio.context_processor import inject_site_settings
        app.context_processor(
            lambda a=app: inject_site_settings(a.config))

        # Add custom filters in template level
        from lsmakeupstudio.utils.template import elapsed_time, regex_replace
        app.jinja_env.filters['regex_replace'] = regex_replace
        app.jinja_env.filters['elapsed_time'] = elapsed_time

        # Initialize extensions
        db.init_app(app)
        bcrypt.init_app(app)
        assets.init_app(app)
        login_manager.init_app(app)

        # Register custom handlers
        from lsmakeupstudio.handlers import not_found, user_loader
        app.register_error_handler(404, not_found)

        # Register third-party handlers
        login_manager.user_loader(user_loader)

        # Custom settings
        login_manager.login_view = 'accounts.login'
        login_manager.login_message = 'Por favor, realize o login para continuar.'
        login_manager.login_message_category = 'info'

        # Bundle common assets
        vendor_js = Bundle(
            'vendor/jquery/dist/jquery.min.js',
            'vendor/rx/dist/rx.all.min.js',
            'vendor/rxjs/bundles/rxjs.umd.min.js',
            'vendor/rx-jquery/rx.jquery.min.js',
            'vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
            'vendor/@fortawesome/fontawesome-free/js/all.min.js',
            output='js/vendor.min.js'
        )
        vendor_css = Bundle(
            'vendor/@fortawesome/fontawesome-free/css/all.min.css',
            output='css/vendor.min.css'
        )
        assets.register('vendor_js', vendor_js)
        assets.register('vendor_css', vendor_css)
        assets.register('theme_js', theme_js)
        assets.register('theme_css', theme_css)

        # Initialize routes
        from lsmakeupstudio.api import api
        from lsmakeupstudio.views.accounts import accounts
        from lsmakeupstudio.views.home import home
        from lsmakeupstudio.views.support import support
        from lsmakeupstudio.views.sw import sw
        app.register_blueprint(api)
        app.register_blueprint(accounts)
        app.register_blueprint(home)
        app.register_blueprint(support)
        app.register_blueprint(sw)

    return app
