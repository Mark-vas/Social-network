import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { compose } from "redux";

class Login extends React.Component {
  authUser = (data) => {
    // debugger
    // dfsafasfse
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={this.authUser} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // debugger
  return {
    form: state.form.login,
  };
};

export default compose(connect(mapStateToProps)(Login));

// Функциональная компонента
// import { reduxForm, Field } from 'redux-form';

// const LoginForm = (props) => {
//     return <div>
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Login'} name={'login'} component={"input"} />
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={"input"} />
//             </div>
//             <div>
//                 <Field type={"checkbox"} name={'rememberMe'} component={"input"} /><span>remember me</span>
//             </div>
//             <div>
//                 <button type="submit">SEND</button>
//             </div>
//         </form>
//     </div>
// }

// const LoginReduxForm = reduxForm({
//     form: 'login'
// })(LoginForm)

// const Login = (props) => {
//     const onSubmit = (data) => {
//         debugger
//         console.log(data)
//     }
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} />
//     </div>
// }

// export default Login
