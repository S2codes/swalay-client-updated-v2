import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
 <div className='w-full h-screen flex items-center justify-center'>
      <Image src="https://swalay-music-files.s3.ap-south-1.amazonaws.com/assets/loading.gif" width={100} height={100} alt="Loading" />
    </div>
  )
}

export default loading