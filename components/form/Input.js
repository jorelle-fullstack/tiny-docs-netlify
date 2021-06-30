

const Input = ({ register, errors, placeholder, defaultValue, type, showError = true, render, ...rest }) => {
  const { name } = register
  return (
    <div className='input-wrapper'>
      <input defaultValue={defaultValue} placeholder={placeholder} {...register} type={type} {...rest} />

      {render && render()}


      {errors[name] && showError && <span className="asterisk">*</span>}
      {errors[name] && showError && <span className="form--error">{errors[name].message || 'This field is required'} </span>}
    </div>
  )
}
export default Input
