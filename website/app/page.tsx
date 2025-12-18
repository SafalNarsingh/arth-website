import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Page from '@/components/Page'
import Past_Iterations from '@/components/Past_Iterations'
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
      <Past_Iterations></Past_Iterations>
      <FAQ></FAQ>
      
      
    </div>
  )
}

export default Home

