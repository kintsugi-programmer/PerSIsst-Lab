import React from 'react'
import Link from 'next/link';

const Members = () => {
  return (
    <div>Members
    <ul>
    <li><Link href="/Members/Core">Core Members</Link></li>
        <li><Link href="/Members/Alumini">Alumni Members</Link></li>
        <li><Link href="/Members/Btech">BTech Members</Link></li>
        <li><Link href="/Members/Mtech">MTech Members</Link></li>
        <li><Link href="/Members/Phd">PhD Members</Link></li>
    </ul>
    </div>
  )
}

export default Members