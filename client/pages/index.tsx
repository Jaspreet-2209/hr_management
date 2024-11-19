import React from "react";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";
import { FaCircleCheck } from "react-icons/fa6";
import { Carousel } from "flowbite-react";
import Card from "react-bootstrap/Card";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import Navbar from "./navbar";
import { LiaCoinsSolid } from "react-icons/lia";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Home() {
  const setDarkMode = () => {
    document.querySelector(".navbar")?.setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector(".navbar")?.setAttribute("data-theme", "light");
  };
  const togglTheme = (e: any) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <>
      <Navbar />
      <section className="Hero_Section">
        <div className="row" style={{ maxWidth: "100%" }}>
          <div className="col-lg-6" id="head" style={{ marginTop: "90px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "800",
                fontStyle: "normal",
              }}
              className="big-heading motion"
            >
              {data.hero.headline}
            </h1>
            <br />
            <h3
              style={{
                color: "#ffffff",
                paddingBottom: "20px",
                fontSize: "25px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "800",
                fontStyle: "normal",
              }}
              className="big-heading"
            >
              {data.hero.subheadline}
            </h3>
            <FaCircleCheck className="a6" />
            <p
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "500",
                fontStyle: "normal",
                marginLeft: "40px",
              }}
              className="big-heading"
            >
              {data.hero.text1}
            </p>
            <FaCircleCheck className="a6" />
            <p
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "500",
                fontStyle: "normal",
                marginLeft: "40px",
              }}
              className="big-heading"
            >
              {data.hero.text2}
            </p>
            <FaCircleCheck className="a6" />
            <p
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontFamily: "Orbitron, sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "500",
                fontStyle: "normal",
                marginLeft: "40px",
              }}
              className="big-heading"
            >
              {data.hero.text3}
            </p>
            <Link href="./login">
              <button
                type="button"
                style={{
                  background: "#FDB71C",
                  marginRight: "20px",
                  marginTop: "20px",
                  width: "120px",
                }}
                className="btn btn-dark btn-lg download-button"
              >
                <FaUserLarge className="a2" />
                <span className="ctabutton">
                  {data.hero.ctaButtons[0].text}
                </span>
              </button>
            </Link>
            <Link href="./register">
              <button
                type="button"
                style={{
                  background: "#FDB71C",
                  marginTop: "20px",
                  width: "132px",
                }}
                className="btn btn-dark btn-lg download-button"
              >
                <FaUserLarge className="a3" />
                <span className="ctabuttons">
                  {data.hero.ctaButtons[1].text}
                </span>
              </button>
            </Link>
          </div>
          <div className="col-lg-6 hero">
            <iframe
              className="loginform"
              src="./registerform"
              height="580"
              width="500"
              title="Iframe Example"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="white-section" id="features">
        <div className="container-fluid1">
          <div className="row">
            <div className="feature-box col-lg-4">
              <div className="icon">
                <FaCircleCheck size={50} />
              </div>
              <h3 className="feature-title">{data.features[0].title}</h3>
            </div>
            <div className="feature-box col-lg-4">
              <div className="icon">
                <LiaCoinsSolid size={50} />
              </div>
              <h3 className="feature-title">{data.features[1].title}</h3>
            </div>
            <div className="feature-box col-lg-4">
              <div className="icon">
                <FaEarthAmericas size={50} />
              </div>
              <h3 className="feature-title">{data.features[2].title}</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[40px] sm:h-44 xl:h-80 2xl:h-96 fulls">
          <Carousel slideInterval={1500}>
            <table>
              <tbody>
                <tr>
                  <td className="right-[1100px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-6.png/c30f98a49608b920164267d9bace0700/reward-badge-2x-6.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[820px] absolute top-[-100px] ">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-5.png/b51e614ec147202684bf0887c0bce8b3/reward-badge-2x-5.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[530px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-4.png/dfe992995c74a010fe6632a560206acd/reward-badge-2x-4.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[250px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-3.png/169b1eecd83fdc96e7b0b6c22f481fe4/reward-badge-2x-3.webp"
                      alt="..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className="right-[1100px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-2.png/c5175487dc2c42493ec5c4a967e0d221/reward-badge-2x-2.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[820px] absolute top-[-100px] ">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-1.png/781a35384e166c2f9d6f86d3f7e4e525/reward-badge-2x-1.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[530px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-9.png/771a8eaeafb37dd6650df28c8b710eef/reward-badge-2x-9.webp"
                      alt="..."
                    />
                  </td>
                  <td className="right-[250px] absolute top-[-100px]">
                    <img
                      className="imgs"
                      src="https://www.goco.io/img/containers/assets/static/core/badges/reward-badge-2x-10.png/1d91d2d1dcd975ca84b81f180d3dce42/reward-badge-2x-10.webp"
                      alt="..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Carousel>
        </div>
      </section>
      <div className="imggg1">
        <p className="imggga"> Trusted by 34,000+ Companies of All Sizes</p>
      </div>
      <div className="cat">
        <img
          alt="walking cat"
          src="https://content.presentermedia.com/content/animsp/00018000/18526/golden_handshake_agreement_md_nwm_v2.gif"
        />
      </div>
      <section className="full" id="pricing">
        <div className="container-fluid">
          <div className="row a1">
            {data.pricing.map((data1, index) => (
              <>
                <div
                  className="col"
                  style={{ marginTop: "100px", marginBottom: "25px" }}
                >
                  <Card
                    className="card43 border-dark"
                    style={{
                      background: "#F5F3EE",
                      borderRadius: "15px",
                      height: "300px",
                    }}
                  >
                    <div className="cd4">
                      <Card.Body>
                        <div className="cd41img">
                          <img
                            style={{
                              height: "36px",
                              width: "36px",
                              marginLeft: "-9px",
                            }}
                            className="cd4img"
                            src={data.pricing[index].img}
                            alt="card4c"
                          ></img>
                        </div>
                        <Card.Text
                          style={{
                            color: "black",
                            textAlign: "left",
                            fontSize: "small",
                            marginBottom: "5px",
                          }}
                        >
                          {data.pricing[index].age}
                        </Card.Text>
                        <div
                          className="card4Title"
                          style={{ textAlign: "left" }}
                        >
                          <Card.Text
                            style={{
                              fontSize: "25px",
                              fontFamily: "Bad Script, cursive",
                              fontWeight: "400",
                              fontStyle: "normal",
                            }}
                          >
                            {data.pricing[index].name}
                          </Card.Text>
                        </div>
                        <div
                          className="card4Text"
                          style={{ textAlign: "left" }}
                        >
                          <Card.Text>{data.pricing[index].content}</Card.Text>
                        </div>
                        <div
                          className="card4Text "
                          style={{ textAlign: "left" }}
                        >
                          <Link href="./login">
                            <button
                              type="button"
                              className="tbh btn-dark btn-sm download-button mt-[15px] "
                            >
                              {data.pricing[index].price}
                            </button>
                          </Link>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section id="foot">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>CATEGORIES</h3>
              <ul>
                <li>
                  <a href="#">Employee Details</a>
                </li>
                <li>
                  <a href="#">Register Employee</a>
                </li>
                <li>
                  <a href="#">Payroll</a>
                </li>
                <li>
                  <a href="#">Time and attendance</a>
                </li>
              </ul>
            </div>

            <div className="footer-column newsletter">
              <h3>GET IN TOUCH</h3>
              <form className="get">
                <input type="email" placeholder="Enter your email here..." />
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright © 2022 <a href="#">Sage HR</a> | All Rights Reserved
            </p>
            <div className="social-icons">
              <div className="iii">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a className="a1" href="#">
                          <FaFacebook />
                        </a>
                      </td>
                      <td>
                        <a href="https://x.com/Jaspree99070719">
                          <FaTwitter />
                        </a>
                      </td>
                      <td>
                        <a href="https://github.com/Jaspreet-2209">
                          <FaLinkedin />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <PiInstagramLogoFill />
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <FaSquareRss />
                        </a>
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
  );
}
