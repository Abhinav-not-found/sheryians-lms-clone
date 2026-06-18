import AuthCard from "../components/AuthCard"
import AuthHeader from "../components/AuthHeader"
import GoogleBtn from "../components/GoogleBtn"
import Splitter from "../components/Splitter"
import SignInForm from "../forms/SignInForm"

const SignIn = () => {
  return (
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <AuthCard>
        <AuthHeader type='signin' />
        <SignInForm />
        <Splitter />
        <GoogleBtn />
      </AuthCard>
    </main>
  )
}

export default SignIn
