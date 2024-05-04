import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { SiEagle } from 'react-icons/si'
import { BsSearch } from 'react-icons/bs'

function App() {

  const handleClick = () => {
    alert('Clicked')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-2'>
      <Button size={'2xl'} onClick={handleClick} color={'gray'}>CTA Button</Button>
      <Button size={'2xl'} variant={'secondary'} onClick={handleClick}>CTA Button</Button>
      <Button size={'2xl'} variant={'tertiary'} onClick={handleClick}>CTA Button</Button>
    </div>
  )
}

export default App
