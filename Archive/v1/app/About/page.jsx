import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <div>About
      <ul>
      <li><Link href="/About/Lab">Lab</Link></li>
        <li><Link href="/About/Professor">Professor</Link></li>

      </ul>
    </div>
  )
}

export default About