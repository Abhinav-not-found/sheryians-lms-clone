const Field = ({ children, label, name, errors }) => {
  return (
    <div className='mb-4 flex flex-col'>
      <label className='text-neutral-300 mb-2 text-sm'>{label}</label>
      {children}
      {errors?.[name] && (
        <p className='text-xs text-red-500'>{errors[name].message}*</p>
      )}
    </div>
  )
}

export default Field
