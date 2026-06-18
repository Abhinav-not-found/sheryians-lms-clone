import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Avatar from "./Avatar"
import AvatarMenu from "./AvatarMenu"

const AvatarComponent = () => {
  const [menu, setMenu] = useState(false)
  const { user } = useSelector((store) => store.auth)
  return (
    <div className='relative cursor-pointer'>
      <div
        onClick={() => setMenu((prev) => !prev)}
        className='flex items-center gap-2 group'
      >
        <Avatar image={user?.avatar} />
        {menu ? (
          <ChevronDown className='size-4 group-hover:animate-bounce rotate-180' />
        ) : (
          <ChevronDown className='size-4 group-hover:animate-bounce' />
        )}
      </div>
      {menu && <AvatarMenu user={user} />}
    </div>
  )
}

export default AvatarComponent
