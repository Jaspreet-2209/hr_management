import React from "react";
import { useState } from "react";
import Navbara from "./navbar1";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";

export default function Form() {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    empID: "",
    email: "",
    jobrole: "",
    salary: "",
    account_no: "",
    IFSC_code: "",
    performance_appraisal: "",
    company_ex: "",
    date_of_joining: "",
    phoneno: "",
  });
  const [documents, setDocuments] = useState({ resume: "", certificate: "" });
  const [image, setImage] = useState<any | null>(null);
  function preview(e: any) {
    const { resume, certificate } = documents;
    const formData = new FormData();
    formData.append("resume", documents.resume);
    console.log(documents.resume);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      empID,
      email,
      jobrole,
      salary,
      account_no,
      IFSC_code,
      performance_appraisal,
      company_ex,
      date_of_joining,
      phoneno,
    } = credentials;

    const response = await fetch(
      "http://localhost:8080/details/createemployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          empID,
          email,
          jobrole,
          salary,
          account_no,
          IFSC_code,
          performance_appraisal,
          company_ex,
          date_of_joining,
          phoneno,
          base64: image,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("Employee is successfully registered");
    }
  };
  const onChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onChangeDoc = (e: any) => {
    setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
  };

  function connectToBase64(e: any) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  return (
    <>
      <div className="gfx">
        <Navbara />

        <form className="max-w-md mt-[50px] mx-auto" onSubmit={handleSubmit}>
          <div className="tabs grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstname"
                onChange={onChange}
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="firstname"
                className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                onChange={onChange}
                name="lastname"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="lastname"
                className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              onChange={onChange}
              name="empID"
              id="floating_empID"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="empID"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Employee ID
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              onChange={onChange}
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={onChange}
              type="text"
              name="date_of_joining"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="date_of_joining"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of joining
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={onChange}
              type="text"
              name="IFSC_code"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="IFSC_code"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              IFSC code
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={onChange}
                type="number"
                name="phoneno"
                id="floating_ph "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="phoneno"
                className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ph number (1234567890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={onChange}
                type="text"
                name="company_ex"
                id="company_ex"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="company_ex"
                className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={onChange}
              type="text"
              name="jobrole"
              id="floating_jobrole"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="jobrole"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job role
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={onChange}
              type="text"
              name="salary"
              id="floating_jobrole"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="salary"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salary
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={onChange}
              type="text"
              name="account_no"
              maxLength={26}
              id="floating_jobrole"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-n  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-n  focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="account_no"
              className="lab peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Account number
            </label>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
              htmlFor="image"
            >
              Upload image
            </label>
            <input
              name="image"
              onChange={connectToBase64}
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-n  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept="image/*"
            />
            <p
              className="labs mt-1 text-sm text-gray-500 dark:text-gray-500"
              id="file_input_help"
            >
              SVG, PNG or JPG (MAX. 800 x 400px).
            </p>
          </div>

          <div>
            <label
              htmlFor="performance_appraisal"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Perforance Appraisal
            </label>
            <textarea
              onChange={onChange}
              id="message"
              name="performance_appraisal"
              className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 peer-focus:ring-blue-500 peer-focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="subs mt-[20px] text-white  focus:ring-4 focus:outline-n  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
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
      </div>
    </>
  );
}
