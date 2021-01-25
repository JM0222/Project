from flask import Flask, jsonify, request, render_template, make_response, session, url_for, redirect
# from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from flask_cors import CORS
# from web_view import view
# from web_control.user_mgmt import User
import datetime
app = Flask(__name__, static_url_path='/static')
# CORS(app)
# app.secret_key = 'jm_server'

# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.session_protection = 'strong'
# app.register_blueprint(view.web_test, url_prefix='/web')

# subscribe 
# @login_manager.user_loader
# def load_user(user_id):
#     return User.get(user_id)

@app.route('/set_email', methods=['GET','POST'])
# def set_email():
#     if request.method == 'GET':
#         print('set_email', request.args.get('user_email'))
#         return redirect(url_for('web'))
#     else:
#         print('set_email', request.form['user_email'])
#         user = User.create(request.form['user_email'])
#         login_user(user, remember=True, duration=datetime.timedelta(days=7))
#         return redirect(url_for('web'))

# webpage
@app.route('/')
def web():
    return render_template('index.html')

@app.route('/web2')
def web2():
    return render_template('index2.html')

@app.route('/video')
def video():
    return render_template('index3.html')

@app.route('/web3')
def web3():
    return render_template('index4.html')

@app.route('/web4')
def web4():
    return render_template('index5.html')

# run   
if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
