import Logo from "@/shared/ui/components/Logo"
import AvatarComponent from "./AvatarComponent"

const Navbar = () => {
  return (
    <header className='w-full h-20 flex items-center justify-between border-b border-accent px-8 bg-neutral-900'>
      <Logo />
      <AvatarComponent />
    </header>
  )
}

export default Navbar
