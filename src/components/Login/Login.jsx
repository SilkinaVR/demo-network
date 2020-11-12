import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { login, security } from '../../redux/authReduser';
import { required } from '../../utils/validator/validators';
import { Input } from '../Common/FormsControl/FormsControl';
import styles from '../Common/FormsControl/FormsControl.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder={'Email'} component={Input} type="text" validate={[required]} />
            </div>
            <div>
                <Field name="password" placeholder={'Password'} component={Input} type="password" validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox" />remember me

            </div>
            {props.error &&
                <div className={styles.errorsome}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
            <div>
                <div>
                    <img src={props.url} alt="" />
                </div>
                {(props.url !== "") &&
                    <div>
                        <Field name="captcha" placeholder={'Captcha'} component={Input} type="text" />
                    </div>
                }
            </div>




        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    let onSubmit = (formData) => {
        console.log("formData")
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    // debugger
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <LoginReduxForm url={props.url} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        url: state.auth.url,
        isAuth: state.auth.isAuth
    }

}

export default connect(mapStateToProps, { login, security })(Login);