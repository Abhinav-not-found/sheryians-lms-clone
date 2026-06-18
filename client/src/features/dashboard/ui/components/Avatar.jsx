import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const Avatar = ({ className, image }) => {
  const ProfileImage = image
    ? image
    : "https://ik.imagekit.io/nya4chyes/profilePictureDefault.jpg?updatedAt=1779474603688"
  return (
    <div
      className={twMerge(
        clsx("size-10 rounded-full border border-neutral-400", className),
      )}
      style={{
        backgroundImage: `url(${ProfileImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  )
}

export default Avatar
