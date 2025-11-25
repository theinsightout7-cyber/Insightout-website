import ButtonComponent from "./ButtonComponent";
import logo from '../assets/insight-out-logo.png';
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { links } from "../data/data";

// import InputComponent from "./InputComponent";


const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className=" mt-24 flex flex-col w-full bg-[var(--dark-blue)] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-4 max-w-xs">
          <Link to="/" className="w-[120px] mb-2">
            <img src={logo} alt="Insight Out Logo" className="w-full" />
          </Link>
          <span className="text-[#fff] mt-4 text-sm">
            Your trusted partner in innovative solutions.
          </span>
          <div className="flex gap-3 mt-2">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="text-white text-2xl hover:text-[var(--primary-orange)] transition" />
            </a>
            <a href="https://www.instagram.com/insightoutng?igsh=YzJhM2c1dWJpN3pk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white text-2xl hover:text-[var(--primary-orange)] transition" />
            </a>
            <a href="https://www.linkedin.com/company/insightout-ng/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-white text-2xl hover:text-[var(--primary-orange)] transition" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 text-white font-medium">
          <span className="mb-2 font-bold text-lg">Navigation</span>
          {links.map((link, ) => (
           
          <Link key={link.id} to={link.url} className="text-sm  hover:text-[var(--primary-orange)] transition capitalize">{link.name}</Link>
        
          ))}
        </nav>

        {/* Newsletter */}
        <div className="flex flex-col gap-3 max-w-sm w-full">
          <span className="text-white font-bold text-lg mb-1">Subscribe to our Newsletter</span>
          <form
            className="flex gap-2"
            onSubmit={e => {
              e.preventDefault();
              setEmail("");
              // Add your subscribe logic here
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="rounded-l px-3 py-2 w-full outline-none bg-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="flex flex-col w-[100px]">

            <ButtonComponent
              type="submit"
              label="Subscribe"
              className="rounded-r bg-[var(--primary-orange)] text-white px-4 py-2 w-[100px]"
            />
            </div>
          </form>
          <span className="text-xs text-gray-300">Get the latest updates and insights.</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Insight Out. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;