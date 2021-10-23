from flask import render_template

from lsmakeupstudio.models.user import User as UserModel


def not_found(error):
    """Handle the missing pages or requests"""
    return render_template('404.html'), 404


def user_loader(user_id):
    """Handle the signed in user information"""
    return UserModel.query.get(user_id)
