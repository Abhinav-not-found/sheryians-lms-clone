import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const Card = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "w-full h-full rounded-md bg-neutral-900 ring ring-neutral-800",
          className,
        ),
      )}
    >
      {children}
    </div>
  )
}
export const CardBody = ({ children, className }) => {
  return <div className={twMerge(clsx("p-5", className))}>{children}</div>
}

export const CardHeader = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        clsx(
          "h-12 bg-neutral-800 rounded-t-md px-5 flex items-center",
          className,
        ),
      )}
    >
      {children}
    </div>
  )
}
