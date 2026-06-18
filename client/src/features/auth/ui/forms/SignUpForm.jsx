import { useForm } from "react-hook-form"
import authRule from "@/app/constants/auth/authForm-constant"
import useAuth from "../../hooks/authHook"
import AgreementCheck from "../components/AgreementCheck"
import AuthBtn from "../components/AuthBtn"
import Field from "../components/Field"
import Input from "../components/Input"

const SignUpForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { handleSignUp } = useAuth(reset)

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Field label={"Name"} name={"name"} errors={errors}>
        <Input
          name={"name"}
          register={register}
          errors={errors}
          placeholder={"First Name"}
          rules={authRule.name}
        />
      </Field>
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
      <AgreementCheck register={register} errors={errors} />
      <AuthBtn>Register Now</AuthBtn>
    </form>
  )
}

export default SignUpForm
