import React from "react"
import d from './RenderField.module.css'
//redux-form.com

export const SomeField = TypeField => ({input,
  label,
  type,
  meta: { touched, error, warning }}) => {
    let  myError = touched && error;
  return(    
  <div className={d.formValid + " " +  (myError ? d.styleError : " ")}>      
    <label>{label}</label>
    <div>
      < TypeField {...input} placeholder={label} type={type} />
    </div>
    <div>
      { myError && <span >{error}</span>}
    </div>
  </div>
) 
}

  export const StatusInput = ({
    input,    
    type,
    meta: { touched, error }
  }) => {
    let  myError = touched && error;
    
    return(    
    <div className={d.formValid + " " +  (myError ? d.styleError : " ")}>      
      <div>
        <input {...input}  type={type} />
      </div>
      <div>
        { myError && <span >{error}</span>}
      </div>
    </div>
  )}
   
  
  // {touched &&
  //   ((error && <span>{error}</span>) ||
  //     (warning && <span>{warning}</span>))}