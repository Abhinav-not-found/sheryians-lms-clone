import { SearchIcon } from "lucide-react"

const Search = () => {
  return (
    <div className='border border-neutral-500/80 h-fit w-fit flex items-center gap-2 px-1.5 py-1 rounded-xs focus-within:border-primary'>
      <SearchIcon className='size-4 text-neutral-500' />
      <input
        type='text'
        className='outline-none placeholder:text-sm'
        placeholder='Search'
      />
    </div>
  )
}

export default Search
