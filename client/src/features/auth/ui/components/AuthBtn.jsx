const AuthBtn = ({ children }) => {
  return (
    <button
      type='submit'
      className='w-full h-12 bg-primary rounded-sm text-sm bg-linear-to-r from-primary to-[#9d401f]'
    >
      {children}
    </button>
  )
}

export default AuthBtn
