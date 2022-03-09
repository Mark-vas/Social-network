import React from 'react';
import classes from './FormsControls.module.css'

export const TextArea = ({ input, meta, ...props }) => {
    debugger
    const showError = meta.active && meta.error
    return <div className={classes.formControl + ' ' + (showError ? classes.error : '')}>
        <textarea {...input} {...props} cols="50" rows="3" ></textarea>
        {showError && <p>{meta.error}</p>}
    </div>
}

export const InputLoginForm = ({ input, meta, ...props }) => {
    const showError = meta.touched && meta.error
    return <div className={classes.formControl + ' ' + (showError ? classes.error : '')}>
        <input {...input} {...props} />
        {showError && <span>{meta.error}</span>}
    </div>
}