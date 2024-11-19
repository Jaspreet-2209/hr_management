import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";



const Geofence = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [status, setStatus] = useState('');
  const geofenceCenter = { latitude:25.34382, longitude: 81.9097508 }; // Example coordinates (NYC)
  const geofenceRadius = 500; // Geofence radius in meters

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ latitude, longitude });
          const insideGeofence = isInsideGeofence(latitude, longitude, geofenceCenter, geofenceRadius);
          if (insideGeofence) {
            setStatus('Inside geofence Attendance is marked');
            let c1=1;
            checkIn();

          } else {
            setStatus('Outside geofence You have not reached,Attndance is not marked');
            checkOut();
          }
        },
        (error) => console.error('Error getting location', error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const isInsideGeofence = (lat, lon, center, radius) => {
    const distance = getDistance(lat, lon, center.latitude, center.longitude);
    return distance <= radius;
  };

  const checkIn = async () => {
    const userId = '123'; // Example user ID
    await axios.post('https://hr-management-system-f8uk.onrender.com/attendance/checkin', {
      userId,
      latitude: position.latitude,
      longitude: position.longitude,
    });
  };

  const checkOut = async () => {
    const userId = '123'; // Example user ID
    await axios.post('https://hr-management-system-f8uk.onrender.com/attendance/checkout',{userId});
  };

  return (
    <div className='Geofence'>
        <Navbar />
        <div className='Geofence1'>

      <h1 className='geo'>Geofencing Attendance</h1>
      <p className='current'>Your Current Location : Latitude: {position.latitude}, Longitude: {position.longitude}</p>
      <div  className='sta'><p>Status: {status}</p></div>
     </div>
    
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
</div>

  );
};

export default Geofence;