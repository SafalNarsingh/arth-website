import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Page from '@/components/Page'
import Rounds from '@/components/Rounds'
import Story from '@/components/Story'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
       <Page></Page>
      <Story></Story>
      <Rounds></Rounds>
      
      
    </div>
  )
}

export default Home

