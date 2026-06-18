const Input = ({
  placeholder,
  type = "text",
  register,
  errors,
  name,
  rules,
}) => {
  return (
    <input
      {...register(name, rules)}
      type={type}
      placeholder={placeholder}
      className={`border rounded-sm px-4 py-2 outline-neutral-500 text-sm ${errors?.[name] ? "border-red-500 outline-red-500" : "border-border"}`}
    />
  )
}

export default Input
