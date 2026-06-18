import { Card } from "@/shared/ui/components/Card"

const Heatmap = () => {
  return (
    <Card className={"p-4 space-y-2"}>
      <h5 className='text-neutral-300'>Progress Heatmap</h5>
      <div>
        <p className='text-sm text-destructive/80'>
          Crushed 500 activities so far!
        </p>
        <Map />
      </div>
      <HeatmapFooter />
    </Card>
  )
}
const HeatmapFooter = () => {
  return (
    <div className='flex'>
      <p className='text-xs'>Learn how we count activities</p>
      <div className='flex gap-1'>
        <p className='text-xs'>Less</p>
        <div className='flex gap-1'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='size-4 rounded-xs bg-neutral-500'></div>
          ))}
        </div>
        <p className='text-xs'>More</p>
      </div>
    </div>
  )
}

const Map = () => {
  return (
    <div className='grid grid-cols-20 grid-rows-7 gap-y-0.5 gap-x-3.5 p-2 border border-neutral-700 rounded-sm mt-2'>
      {Array.from({ length: 140 }).map((_, index) => (
        <div key={index} className='size-3 rounded-xs bg-neutral-500' />
      ))}
    </div>
  )
}

export default Heatmap
