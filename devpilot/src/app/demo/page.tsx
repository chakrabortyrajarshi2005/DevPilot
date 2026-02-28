"use client"
import { Button } from '@/components/ui/button'

function DemoFunction() {
    const handleBooking = async ()=>{
        fetch("../api/demo/blocking",{method:"POST"})
    }
  return (
    <div className='p-2 space-x-2'>
      <Button onClick={handleBooking}>
        Blocking
      </Button>
    </div>
  )
}

export default DemoFunction