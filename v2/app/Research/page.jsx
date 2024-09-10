import React from 'react'
import Link from 'next/link';

const Research = () => {
  return (
    <div>Research
      <ul>
        <li><Link href="/Research/News">News</Link></li>
        <li><Link href="/Research/Projects">Projects</Link></li>
        <li><Link href="/Research/Publications">Publications</Link></li>
      </ul>
    </div>
  )
}

export default Research