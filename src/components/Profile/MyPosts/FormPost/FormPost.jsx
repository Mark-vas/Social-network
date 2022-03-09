import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../../utils/validators';
import { TextArea } from '../../../FormsControls/FormsControls'

const maxLength3000 = maxLength(3000)

const FormPost = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength3000]} name={'newPost'} component={TextArea} placeholder={'Post message'} />
            <button>Добавить</button>
        </form>
    </div>
}
export default reduxForm({
    form: 'post'
})(FormPost)