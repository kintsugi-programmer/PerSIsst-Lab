import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      PerSIsst Lab - Navigation
      <ul>
        <li><Link href="/About">About</Link></li>
        <ul><li><Link href="/About/Lab">Lab</Link></li>
        <li><Link href="/About/Professor">Professor</Link></li></ul>

        <li><Link href="/Beyond">Beyond</Link></li>
        <ul><li><Link href="/Beyond/AluminiStories">Alumni Stories</Link></li>
        <li><Link href="/Beyond/ImpactfulBlogs">Impactful Blogs</Link></li></ul>

        <li><Link href="/Blogs">Blogs</Link></li>

        <li><Link href="/Members">Members</Link></li>
        <ul><li><Link href="/Members/Core">Core Members</Link></li>
        <li><Link href="/Members/Alumini">Alumni Members</Link></li>
        <li><Link href="/Members/Btech">BTech Members</Link></li>
        <li><Link href="/Members/Mtech">MTech Members</Link></li>
        <li><Link href="/Members/Phd">PhD Members</Link></li></ul>

        <li><Link href="/Opportunities">Opportunities</Link></li>
        <ul><li><Link href="/Opportunities/BIp">BIp</Link></li>
        <li><Link href="/Opportunities/BTP">BTP</Link></li>
        <li><Link href="/Opportunities/RA">RA</Link></li>
        <li><Link href="/Opportunities/Phd">PhD</Link></li>
        <li><Link href="/Opportunities/Summer">Summer</Link></li>
        <li><Link href="/Opportunities/Winter">Winter</Link></li></ul>

        <li><Link href="/Research">Research</Link></li>
        <ul><li><Link href="/Research/News">News</Link></li>
        <li><Link href="/Research/Projects">Projects</Link></li>
        <li><Link href="/Research/Publications">Publications</Link></li></ul>

        <li><Link href="/Collaborators">Collaborators</Link></li>
        <li><Link href="/Sponsors">Sponsors</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
