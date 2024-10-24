"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-white">The Navbar will show on top of the page</p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/images/logo-text.svg"
            alt="persisst logo"
            width={100}
            height={100}
          />
        </Link>

        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/About/Lab">Our Lab</HoveredLink>
            <HoveredLink href="/About/Team">Our Team</HoveredLink>
            {/* <HoveredLink href="/About/AluminiStories">
              Alumni Stories
            </HoveredLink>
            <HoveredLink href="/About/ImpactfulBlogs">
              Impactful Blogs
            </HoveredLink> */}
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Research/Blogs">Blogs</HoveredLink>
            <HoveredLink href="/Research/Projects">Projects</HoveredLink>
            <HoveredLink href="/Research/Publications">
              Publications
            </HoveredLink>
          </div>
        </MenuItem>



        {/* <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Community/Core">Core Members</HoveredLink>
            <HoveredLink href="/Community/Alumini">Alumni Members</HoveredLink>
            <HoveredLink href="/Community/Btech">BTech Members</HoveredLink>
            <HoveredLink href="/Community/Mtech">MTech Members</HoveredLink>
            <HoveredLink href="/Community/Phd">PhD Members</HoveredLink>
            <HoveredLink href="/Community/Collaborators">
              Collaborators
            </HoveredLink>
          </div>
        </MenuItem> */}

        {/* <MenuItem setActive={setActive} active={active} item="Opportunities">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Opportunities/Summer">
              Summer Openings
            </HoveredLink>
            <HoveredLink href="/Opportunities/Winter">
              Winter Openings
            </HoveredLink>
            <HoveredLink href="/Opportunities/IP">
              Independent Projects
            </HoveredLink>
            <HoveredLink href="/Opportunities/BTP">
              B.Tech. Projects
            </HoveredLink>
            <HoveredLink href="/Opportunities/RA">
              Research Associates
            </HoveredLink>
            <HoveredLink href="/Opportunities/Phd">Ph.D. Openings</HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Resources/FAQ">FAQ</HoveredLink>
            <HoveredLink href="/Resources/InternalResources">InternalResources</HoveredLink>
            <HoveredLink href="/Resources/ExternalResources">ExternalResources</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Let's Connect">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Connect/Join">Join Us</HoveredLink>
            <HoveredLink href="/Connect/Contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>

        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>



        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

export default Navbar;
