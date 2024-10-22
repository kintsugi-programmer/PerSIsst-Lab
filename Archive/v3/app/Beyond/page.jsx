import React from 'react'
import Link from 'next/link';

const Beyond = () => {
  return (
    <div>Beyond
      <ul>
        <li><Link href="/Beyond/AluminiStories">Alumni Stories</Link></li>
        <li><Link href="/Beyond/ImpactfulBlogs">Impactful Blogs</Link></li>
</ul>
    </div>
  )
}

export default Beyond