import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

const index = () => {

  const router = useRouter()

  useEffect(() => {
    // router.push('/home.html')

  }, [])



  return (
    <>
      <Navbar />
      <div>Home Page</div>

    </>
  )
}

export default index