

const Input = ({ register, errors, placeholder, defaultValue, type }) => {

  console.log(errors)
  const { name } = register

  return (
    <div className='input-wrapper'>
      <input defaultValue={defaultValue} placeholder={placeholder} {...register} type={type} />

      {errors[name] && <span className="form--error">{errors[name].message || 'This field is required'} </span>}
    </div>
  )
}

export default Input
