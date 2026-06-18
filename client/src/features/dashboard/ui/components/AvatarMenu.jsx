import { CircleUserRound, LogOut } from "lucide-react"
import useAuth from "@/features/auth/hooks/authHook"
import Avatar from "./Avatar"

const AvatarMenu = ({ user }) => {
  const { handleSignOut } = useAuth()
  return (
    <div className='bg-neutral-800 h-fit border border-neutral-700 size-44 absolute top-12 right-0 rounded-md cursor-auto'>
      <div className='h-12 rounded-t-md border-b border-neutral-700 flex items-center justify-center gap-2'>
        <Avatar className={"size-8"} image={user.avatar} />
        <p className='text-sm'>{user.name}</p>
      </div>
      <nav className='space-y-1 my-2'>
        <NavLink
          name={"Profile"}
          Icon={<CircleUserRound className='text-neutral-400 size-5' />}
        />
        <NavLink
          name={"Logout"}
          Icon={<LogOut className='text-red-400 size-5' />}
          onClick={handleSignOut}
        />
      </nav>
    </div>
  )
}

const NavLink = ({ Icon, name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='flex gap-3 items-center p-1.5 pl-4 hover:scale-105 transition-all cursor-pointer'
    >
      {Icon}
      <p>{name}</p>
    </div>
  )
}

export default AvatarMenu
