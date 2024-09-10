import React from 'react';
import Link from 'next/link';
import '../styles/nav.css'; // Import your global CSS file

const Nav = () => {
  return (<>
    <div>PerSIsst Lab - Navigation</div>
    <nav className="navbar">
      <ul className="mainMenu">
        <li className="menuItem">
          <Link href="/About">About</Link>
          <ul className="subMenu">
            <li><Link href="/About/Lab">Lab</Link></li>
            <li><Link href="/About/Professor">Professor</Link></li>
          </ul>
        </li>

        <li className="menuItem">
          <Link href="/Beyond">Beyond</Link>
          <ul className="subMenu">
            <li><Link href="/Beyond/AluminiStories">Alumni Stories</Link></li>
            <li><Link href="/Beyond/ImpactfulBlogs">Impactful Blogs</Link></li>
          </ul>
        </li>

        <li className="menuItem"><Link href="/Blogs">Blogs</Link></li>

        <li className="menuItem">
          <Link href="/Members">Members</Link>
          <ul className="subMenu">
            <li><Link href="/Members/Core">Core Members</Link></li>
            <li><Link href="/Members/Alumini">Alumni Members</Link></li>
            <li><Link href="/Members/Btech">BTech Members</Link></li>
            <li><Link href="/Members/Mtech">MTech Members</Link></li>
            <li><Link href="/Members/Phd">PhD Members</Link></li>
          </ul>
        </li>

        <li className="menuItem">
          <Link href="/Opportunities">Opportunities</Link>
          <ul className="subMenu">
            <li><Link href="/Opportunities/BIp">BIp</Link></li>
            <li><Link href="/Opportunities/BTP">BTP</Link></li>
            <li><Link href="/Opportunities/RA">RA</Link></li>
            <li><Link href="/Opportunities/Phd">PhD</Link></li>
            <li><Link href="/Opportunities/Summer">Summer</Link></li>
            <li><Link href="/Opportunities/Winter">Winter</Link></li>
          </ul>
        </li>

        <li className="menuItem">
          <Link href="/Research">Research</Link>
          <ul className="subMenu">
            <li><Link href="/Research/News">News</Link></li>
            <li><Link href="/Research/Projects">Projects</Link></li>
            <li><Link href="/Research/Publications">Publications</Link></li>
          </ul>
        </li>

        <li className="menuItem"><Link href="/Collaborators">Collaborators</Link></li>
        <li className="menuItem"><Link href="/Sponsors">Sponsors</Link></li>
        <li className="menuItem"><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav></>
  );
};

export default Nav;
