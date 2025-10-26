import React from "react";
import { SiLeetcode } from "react-icons/si"; // ✅ Import LeetCode icon
import { FaKaggle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer class="flex flex-col items-center pb-10">
        <p class="text-xs text-gray-300">Parul Gupta © 2025</p>
        <div class="black-logo my-4"></div>
        <ul class="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
          <li>
            <a
              href="https://www.linkedin.com/in/guptaparul27/"
              target="_blank"
            >
             <FaLinkedinIn className="bx bxl-linkedin"/>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/parulgupta27"
              target="_blank"
              class="w-5 hover:text-white"
            >
              <TbBrandGithubFilled className="bx bxl-github"/>
            </a>
          </li>
          <li>
            <a href="mailto:parulgupta0227@gmail.com" target="_blank">
            <IoMdMail />
            </a>
          </li>

         
          <li className="hover:text-white">
                    <a href="https://leetcode.com/u/parulgupta27/" target="_blank">
                      <SiLeetcode className="text-[#B1B3C3] hover:text-white" /> 
                    </a>
                  </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
