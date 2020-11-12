import React from 'react'
import styles from '../FormsControl/FormsControl.module.css'


export const Textarea = ({ meta, input, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <textarea {...input}{...props} />
            </div>

            {hasError && <span> {meta.error}</span>}

        </div>

    )
}
export const Input = ({ meta, input, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <input {...input}{...props} />
            </div>

            {hasError && <span> {meta.error}</span>}

        </div>

    )
}


// const FormControl = ({ meta, input,  ...props })=>{
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
//             <div>
//                { props.children}
//             </div>

//             {hasError && <span> {meta.error}</span>}

//         </div>

//     )
// }

// export const Textarea = (props) => {
//     const { meta, input, ...restProps } = props
//    return <FormControl {...props}>  <textarea {...input}{...restProps} /></FormControl >


// }
// export const Input = (props) => {
//     const { meta, input, ...restProps } = props
//    return <FormControl {...props}>  <input {...input}{...restProps} /></FormControl >


// }