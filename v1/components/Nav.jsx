import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <h1>PerSIsst Lab - Navigation</h1>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/Lab">Lab</Link></li>
        <li><Link href="/about/Professor">Professor</Link></li>

        <li><Link href="/beyond">Beyond</Link></li>
        <li><Link href="/beyond/AluminiStories">Alumni Stories</Link></li>
        <li><Link href="/beyond/ImpactfulBlogs">Impactful Blogs</Link></li>

        <li><Link href="/blogs">Blogs</Link></li>

        <li><Link href="/members">Members</Link></li>
        <li><Link href="/members/Core">Core Members</Link></li>
        <li><Link href="/members/Alumini">Alumni Members</Link></li>
        <li><Link href="/members/Btech">BTech Members</Link></li>
        <li><Link href="/members/Mtech">MTech Members</Link></li>
        <li><Link href="/members/Phd">PhD Members</Link></li>

        <li><Link href="/opportunities">Opportunities</Link></li>
        <li><Link href="/opportunities/BIp">BIp</Link></li>
        <li><Link href="/opportunities/BTP">BTP</Link></li>
        <li><Link href="/opportunities/RA">RA</Link></li>
        <li><Link href="/opportunities/Phd">PhD</Link></li>
        <li><Link href="/opportunities/Summer">Summer</Link></li>
        <li><Link href="/opportunities/Winter">Winter</Link></li>

        <li><Link href="/research">Research</Link></li>
        <li><Link href="/research/News">News</Link></li>
        <li><Link href="/research/Projects">Projects</Link></li>
        <li><Link href="/research/Publications">Publications</Link></li>

        <li><Link href="/Collaborators">Collaborators</Link></li>
        <li><Link href="/Sponsors">Sponsors</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
