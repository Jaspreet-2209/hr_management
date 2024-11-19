import React, { useState } from 'react'; 
import Image from 'next/image';
import logo from "../public/sage-logo.png";
import Router from "next/router";
import Navbar from './navbar';
import Registerform from './registerform';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";


export default function Register(props:any) {
  

  return (
    <>
    <Navbar />
    <Registerform />
    
<section id="foot">
<footer className="footer">
    <div className="footer-container">
        <div className="footer-column">
            <h3>COMPANY</h3>
            <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Customers</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>CATEGORIES</h3>
            <ul>
                <li><a href="#">Employee Details</a></li>
                <li><a href="#">Register Employee</a></li>
                <li><a href="#">Payroll</a></li>
                <li><a href="#">Time and attendance</a></li>
            </ul>
        </div>
        
        <div className="footer-column newsletter">
            <h3>GET IN TOUCH</h3>
            <form className="get">
                <input type="email" placeholder="Enter your email here..."/>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
    <div className="footer-bottom" >
        <p>Copyright © 2022 <a href="#">Sage HR</a> | All Rights Reserved</p>
        <div className="social-icons" >
          <div className="iii">
          <table>
            <tbody>
             <tr>
            <td>
            <a className="a1" href="#"><FaFacebook /></a>
            </td>
            <td>
            <a href="https://x.com/Jaspree99070719"><FaTwitter /></a>
            </td>
            <td>
            <a href="https://github.com/Jaspreet-2209"><FaLinkedin /></a>
            </td>
            <td>
            <a href="#"><PiInstagramLogoFill /></a>
            </td>
            <td>
            <a href="#"><FaSquareRss /></a>
            </td>
          </tr>
          </tbody>
          </table>
          </div>
        </div>
    </div>
</footer>
</section>

    </>
  )
}