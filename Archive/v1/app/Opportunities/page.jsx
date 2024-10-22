import React from 'react'
import Link from 'next/link';

const Opportunities = () => {
  return (
    <div>Opportunities
      <ul>
      <li><Link href="/Opportunities/BIp">BIp</Link></li>
        <li><Link href="/Opportunities/BTP">BTP</Link></li>
        <li><Link href="/Opportunities/RA">RA</Link></li>
        <li><Link href="/Opportunities/Phd">PhD</Link></li>
        <li><Link href="/Opportunities/Summer">Summer</Link></li>
        <li><Link href="/Opportunities/Winter">Winter</Link></li>

      </ul>
    </div>
  )
}

export default Opportunities