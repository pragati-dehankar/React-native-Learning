import React, { useState } from 'react'
import './Form.css'
const Form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleNameChange=(e)=>{
          setName(e.target.value)
    }
    const handleSubmit=(e)=>{
       e.preventDefault()
       setName("")
       setEmail("")
       setPassword("")
         
    }
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} value={name} type='text' placeholder='Name'/> 
            <input onChange={(e)=>setEmail(e.target.value)} type='email' value={email} placeholder='email'/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='password'/>
            <button type='submit'>Send</button>
        </form>
    </section>
  )
}

export default Form
