import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputLoginForm } from '../FormsControls/FormsControls';
import { requiredLogin, requiredPassword, maxLength } from '../../utils/validators';

const maxLength20 = maxLength(20)

const LoginForm = (props) => {
    // debugger
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={InputLoginForm}
                    validate={[requiredLogin, maxLength20]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={InputLoginForm}
                    validate={[requiredLogin, requiredPassword, maxLength20]}
                />
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={InputLoginForm} />remember me
            </div>
            <div>
                <button type="submit">SEND</button>
            </div>
        </form>
    </div>
}
export default reduxForm({
    form: 'login'
})(LoginForm)