import { Link } from "react-router"
import authConstant from "@/app/constants/auth/auth-constant"

const AuthHeader = ({ type = "signin" }) => {
  const { title, text, linkText, linkTo } = authConstant[type]

  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <div className='flex gap-2 text-lg'>
        <h3 className='font-manrope text-muted-foreground'>{text}</h3>

        <Link to={linkTo} className='text-primary'>
          {linkText}
        </Link>
      </div>
    </div>
  )
}

export default AuthHeader
