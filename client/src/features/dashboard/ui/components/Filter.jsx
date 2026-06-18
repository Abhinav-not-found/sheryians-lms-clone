import { ArrowUpDown } from "lucide-react"

const Filter = () => {
  return (
    <div className='border border-neutral-500/80 h-fit w-fit flex items-center gap-2 px-1.5 py-1.5 rounded-xs focus-within:border-primary text-muted-foreground'>
      <p className='text-sm'>Sort by Oldest</p>
      <ArrowUpDown className='size-4' />
    </div>
  )
}

export default Filter
