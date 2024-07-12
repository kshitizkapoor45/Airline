import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlightBookingForm from './component/FlightBookingForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <FlightBookingForm />

    </div>
  )
}

export default App
