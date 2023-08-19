import { useState } from 'react'

const ObjLogin = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [time, setTime] = useState('')
  const [cks, setCks] = useState('')

  const sign = () => {
    // Your sign logic here
    // Update time and cks based on your requirements

    // Example of updating time and cks
    const currentTime = '123'
    const currentCks = '345'
    setTime(currentTime)
    setCks(currentCks)
  }
}
export default ObjLogin