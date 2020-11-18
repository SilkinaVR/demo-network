import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validator/validators';
import { Textarea } from '../../Common/FormsControl/FormsControl';

const maxlength10 = maxLengthCreator(10);

const MyPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'post'} placeholder={props.placeholder} type={'text'} component={Textarea}
                    validate={[required, maxlength10]}/>
            </div>
            <div>
                <button>{props.namebutton}</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({ form: 'post' })(MyPostForm);

const PostForm = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData)
        // console.log('formData')
        props.addMessage(formData.post)
    }
    return (
        <MyPostReduxForm onSubmit={onSubmit} namebutton={props.namebutton} placeholder={props.placeholder} />
    )
}


export default PostForm