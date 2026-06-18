import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const Button = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "flex items-center gap-1 bg-[#BF532A] px-3.5 py-1.5 rounded-xs text-xs cursor-pointer",
          className,
        ),
      )}
    >
      {children}
    </button>
  )
}

export default Button
