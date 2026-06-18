const GoogleBtn = () => {
  const handleGoogleSignIn = async () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`
  }
  return (
    <button
      onClick={handleGoogleSignIn}
      className='h-12 w-full rounded-md border border-accent flex items-center justify-center gap-2 cursor-pointer bg-neutral-900/50'
    >
      <img
        src='https://ik.imagekit.io/nya4chyes/googleIcon.svg'
        alt='google-icon'
        className='size-4'
      />
      <p className='text-neutral-400 text-sm'>Continue with Google</p>
    </button>
  )
}

export default GoogleBtn
