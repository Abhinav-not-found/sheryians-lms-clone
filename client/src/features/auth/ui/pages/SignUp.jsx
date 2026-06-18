import AuthCard from "../components/AuthCard"
import AuthHeader from "../components/AuthHeader"
import GoogleBtn from "../components/GoogleBtn"
import Splitter from "../components/Splitter"
import SignUpForm from "../forms/SignUpForm"

const SignUp = () => {
  return (
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <AuthCard>
        <AuthHeader type='signup' />
        <SignUpForm />
        <Splitter />
        <GoogleBtn />
      </AuthCard>
    </main>
  )
}

export default SignUp
