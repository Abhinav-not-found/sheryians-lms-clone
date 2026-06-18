import Classroom from "../components/Classroom"
import Heatmap from "../components/Heatmap"
import Notification from "../components/Notification"

const Dashboard = () => {
  return (
    <main className='flex flex-col p-5 h-[calc(100vh-80px)]'>
      <div className='flex gap-4 h-full'>
        <section className='flex-3 h-full'>
          <Classroom />
        </section>
        <section className='flex-1 h-full flex flex-col gap-4 items-center justify-between'>
          <Notification />
          <Heatmap />
        </section>
      </div>
    </main>
  )
}

export default Dashboard
