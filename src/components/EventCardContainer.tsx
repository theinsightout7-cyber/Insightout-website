import { useState, useEffect, useRef } from 'react'
import { events } from '../data/data'
import EventCard from './EventCard'


const EventCardContainer = () => {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Function to go to next event
 

  // Function to set a specific event
  const handleChange = (event: number) => setActive(event)

  // Auto-advance with setInterval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % events.length)
    }, 5000) // Change every 3 seconds
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <EventCard
        img={events[active].image}
        description={events[active].description}
        name={events[active].name}
        events={events}
        active={active}
        handleChange={handleChange}
        
      />
    </div>
  )
}

export default EventCardContainer