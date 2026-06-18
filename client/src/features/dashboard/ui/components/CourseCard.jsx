import Button from "@/shared/ui/components/Button"

const CourseCard = () => {
  return (
    <div className='bg-neutral-800/40 hover:bg-neutral-800 w-full h-36 rounded-lg flex gap-4 pr-6 cursor-pointer'>
      <div className='w-1/4 h-full bg-neutral-700 rounded-l-lg'></div>
      <div className='w-3/4 h-full flex flex-col justify-center'>
        <div className='flex justify-between items-center'>
          <h5 className='text-2xl'>DSA for Bootcamp</h5>
          <div className='flex gap-2'>
            <Button>Resume Learning</Button>
            <Button className={"bg-[#5865F2]"}>Open Discord</Button>
          </div>
        </div>
        <div className='flex flex-col text-xs text-neutral-400'>
          <p>Bought on February 20, 2026</p>
          <p>Progress 24.7%</p>
        </div>
        <div className='mt-3'>
          <div className='h-1 w-full bg-neutral-700 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
