import { useForm } from "react-hook-form"
import authRule from "@/app/constants/auth/authForm-constant"
import useAuth from "../../hooks/authHook"
import AuthBtn from "../components/AuthBtn"
import Field from "../components/Field"
import Input from "../components/Input"

const SignInForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { handleSignIn } = useAuth(reset)
  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Field label={"Email"} name={"email"} errors={errors}>
        <Input
          name={"email"}
          register={register}
          errors={errors}
          placeholder={"Enter your email here"}
          rules={authRule.email}
        />
      </Field>
      <Field label={"Password"} name={"password"} errors={errors}>
        <Input
          type='password'
          name={"password"}
          register={register}
          errors={errors}
          placeholder={"••••••••"}
          rules={authRule.password}
        />
      </Field>
      <AuthBtn> Sign In</AuthBtn>
    </form>
  )
}

export default SignInForm
