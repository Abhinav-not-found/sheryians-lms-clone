import { Card, CardBody, CardHeader } from "@/shared/ui/components/Card"

const Notification = () => {
  return (
    <Card>
      <CardHeader>
        <h5 className='text-neutral-300'>All Notifications</h5>
      </CardHeader>
      <CardBody className={"flex items-center justify-center h-full"}>
        <div className='text-neutral-400 flex flex-col items-center justify-center'>
          <svg
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            className='text-grey-700 mb-4'
          >
            <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
            <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
          </svg>
          <p className='text-center text-sm'>No notifications available</p>
          <p className='text-center text-[10px] mt-2'>
            You are all caught up! Check back later for updates.
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default Notification
