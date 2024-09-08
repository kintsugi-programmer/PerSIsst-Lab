import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>About
        <ul>
        <li><Link href="/about/Lab">Lab</Link></li>
        <li><Link href="/about/Professor">Professor</Link></li>
        </ul>
    </div>
  )
}

export default page