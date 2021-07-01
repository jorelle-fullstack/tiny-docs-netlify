

const Select = ({ register, errors, placeholder, options, defaultValue, type, showError = true, ...rest }) => {

  const { name } = register
  return (
    <div className='input-wrapper'>
      <select defaultValue={defaultValue} placeholder={placeholder} {...register} type={type} {...rest} >
        {options.map(({ value, label }) =>
          <option value={value}>{label}</option>
        )}
      </select>


      {errors[name] && showError && <span className="asterisk">*</span>}
      {errors[name] && showError && <span className="form--error">{errors[name].message || 'This field is required'} </span>}
    </div>
  )
}
export default Select
