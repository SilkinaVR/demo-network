import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../Common/FormsControl/FormsControl'
import s from './ProfileDataForm.module.css'

const ProfileDataForm = ({profile , ...props}) => {
    return <form className={s.form} onSubmit={props.handleSubmit}>
          {<div><button className={s.form__button} >Save</button></div>}
        {props.error &&
                <div className={s.errorsome}>
                    {props.error}
                </div>
            }
        <div className={s.form__item} >
            <b>FullName:</b>
            <div className={s.form__input}>
                <Field name="fullName" placeholder={'FullName'} component={Input} type="text" />
            </div>
        </div>

        <div className={s.form__item}>
            <b>About me:</b>
            <div className={s.form__input}>
                <Field name="aboutMe" placeholder={'AboutMe'} component={Textarea} type="textarea" />
            </div>
        </div>
        <div className={s.form__item}>
            <b>lookingForAJob:</b>
            <div className={s.form__input}>
                <Field name="lookingForAJob" component={Input} type="checkbox" />
            </div>
        </div>
        <div className={s.form__item}>
            <b>My professional skills:  </b>
            <div className={s.form__input}>
                <Field name="lookingForAJobDescription" placeholder={'LookingForAJobDescription'} component={Textarea} type="textarea" />
            </div>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.form__item && s.form__contact}><b>{key}: </b>
                    <div className={s.form__input}>
                        <Field name={'contacts.' + key} placeholder={key} component={Input} type="text" />
                    </div>
                </div>

            })}
        </div>
   

      
        
    </form>
}
const ProfileDataFormRedux = reduxForm({ form: 'profile' })(ProfileDataForm); 

export default ProfileDataFormRedux