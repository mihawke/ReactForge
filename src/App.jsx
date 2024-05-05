import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import InputField from './components/InputField/InputField'
import { Dropdown, ListItem } from './components/Dropdown/Dropdown'; 
import { FaSearch } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa6';
import Checkbox from './components/Checkbox/Checkbox';

function App() {

  const handleClick =()=>{
    console.log('Clicked')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center gap-2'>
        <Checkbox></Checkbox>
          <Checkbox indeterminate={true} ></Checkbox>
        <Checkbox disabled={true} ></Checkbox>
        <Checkbox variant={'radio'} ></Checkbox>
        <Checkbox variant={'radio'} disabled={true} ></Checkbox>
        <Checkbox variant={'checkcircle'}></Checkbox>
        <Checkbox variant={'checkcircle'} disabled={true} ></Checkbox>
        {/* <Button variant={'primary'}>CTA Button</Button>
        <Button variant={'secondary'}>CTA Button</Button>
        <Button variant={'tertiary'}>CTA Button</Button> */}
    </div>
  )
}

export default App
