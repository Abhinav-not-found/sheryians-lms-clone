import { Headset, MonitorPlay } from "lucide-react"
import Button from "@/shared/ui/components/Button"
import { Card, CardBody, CardHeader } from "@/shared/ui/components/Card"
import CourseCard from "./CourseCard"
import Filter from "./Filter"
import Search from "./Search"

const Classroom = () => {
  return (
    <Card>
      <CardHeader className={"justify-between"}>
        <p className='text-lg'>Classroom</p>
        <div className='flex items-center gap-2'>
          <Button>
            <MonitorPlay className='size-4' />
            <p>Platform Overview</p>
          </Button>
          <Button>
            <Headset className='size-4' />
            <p>Support</p>
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className='flex items-center justify-between'>
          <p>Your Enrolled Courses</p>
          <div className='flex items-center gap-2'>
            <Search />
            <Filter />
          </div>
        </div>
        <div className='mt-4 flex flex-col gap-3'>
          <CourseCard />
        </div>
      </CardBody>
    </Card>
  )
}

export default Classroom
