import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { SiEagle } from 'react-icons/si'
import { BsSearch } from 'react-icons/bs'
import InputField from './components/InputField/InputField'
import { FaRegEnvelope } from 'react-icons/fa6'

function App() {

  const handleClick = () => {
    alert('Clicked')
  }

  const [text, setText] = useState('')

  const handleText = (e)=>{
    setText(e.target.value)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-2'>
      <div className='w-[600px]'>
        <InputField onChange={handleText} helpIcon={true} icon={<FaRegEnvelope className="w-5 h-5"/>} label={'Email'} destructive={true}></InputField>
      </div>
    </div>
  )
}

export default App
