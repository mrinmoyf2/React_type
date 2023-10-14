"use client"

import Button from '@/components/button'
import MoreButton from '@/components/moreButton'
import { useState } from 'react';

export default function Home() {

  const icon = <i></i>;
  const [count, setCount] = useState(0)

  return (

    <main className='min-h-screen flex justify-center items-center'>
        {/* <Button style={{
          backgroundColor: "blue",
          fontSize: 24,
          textColor: "white"
        }} /> */}
        <Button 
        type= "submit" 
        autoFocus={true}
        defaultValue="test"
        className='test'
          // setCount={setCount} 
        />
          {/* {icon} */}
        <MoreButton 
        // countValue={'5'} countHistory={['10','20','30']} 
        />
    </main>
  )
}
