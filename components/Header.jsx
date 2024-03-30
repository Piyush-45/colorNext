
"use client";

import { Button, Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded className="bg-ink-900 mb-6">
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="ColorGenius" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ColorGenius</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/tintandshade">Tint and Shades</Navbar.Link>
        <Navbar.Link href="/contrastchecker">Contrast Checker</Navbar.Link>
        <Navbar.Link href="#about">About us</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}


export default  Header