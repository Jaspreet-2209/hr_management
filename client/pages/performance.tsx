import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";
import Navbara from "./navbar1";

const GoalComponent = () => {
  const [goals, setGoals] = useState<any | null[]>([null]);
  const [review, setReview] = useState<any | null[]>([null]);
  const [developmentPlan, setDevelopmentPlan] = useState<any | null[]>([null]);
  const [newGoal, setNewGoal] = useState({
    description: "",
    status: "",
    targetDate: "",
  });
  const [newReview, setNewReview] = useState({
    description: "",
    status: "",
    targetDate: "",
  });
  const [newDevelopmentPlan, setNewDevelopmentPlan] = useState({
    description: "",
    status: "",
    targetDate: "",
  });

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await axios.get(
        "https://hr-management-nhrr.onrender.com/performance/goals"
      );
      setGoals(response.data);
    };
    fetchGoals();
    const fetchReviews = async () => {
      const response = await axios.get(
        "https://hr-management-nhrr.onrender.com/performance/reviews"
      );
      setReview(response.data);
    };
    fetchReviews();
    const fetchdevelopmentPlan = async () => {
      const response = await axios.get(
        "https://hr-management-nhrr.onrender.com/performance/development-plans"
      );
      setDevelopmentPlan(response.data);
    };
    fetchdevelopmentPlan();
  }, []);

  const addGoal = async () => {
    await axios.post("https://hr-management-nhrr.onrender.com/performance/goals", newGoal);
    setNewGoal({ description: "", status: "", targetDate: "" });
  };
  const addReview = async () => {
    await axios.post("http://localhost:8080/performance/reviews", newReview);
    setNewReview({ description: "", status: "", targetDate: "" });
  };
  const adddevelopmentPlan = async () => {
    await axios.post(
      "https://hr-management-nhrr.onrender.com/performance/development-plans",
      newDevelopmentPlan
    );
    setNewDevelopmentPlan({ description: "", status: "", targetDate: "" });
  };

  return (
    <>
      <Navbara />

      <div className="head">
        <h3>Goals</h3>
        <input
          type="text"
          placeholder="Goal Description"
          value={newGoal.description}
          onChange={(e) =>
            setNewGoal({ ...newGoal, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Status"
          value={newGoal.status}
          onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}
        />
        <input
          type="date"
          value={newGoal.targetDate}
          onChange={(e) =>
            setNewGoal({ ...newGoal, targetDate: e.target.value })
          }
        />
        <button onClick={addGoal} className="flex w-[100px] mt-[30px] justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sbtn" >Add Goal</button>
        <ul className="fetch">
          {goals == "" || goals == null
            ? ""
            : goals.map((goal: any) => (
                <li key={goal._id}>
                  {goal.description} - {goal.status}
                </li>
              ))}
        </ul>
      </div>
      <div className="head">
        <h3>Reviews</h3>
        <input
          type="text"
          placeholder="Description"
          value={newReview.description}
          onChange={(e) =>
            setNewReview({ ...newReview, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rate out of 10"
          value={newReview.status}
          onChange={(e) =>
            setNewReview({ ...newReview, status: e.target.value })
          }
        />
        <input
          type="date"
          value={newReview.targetDate}
          onChange={(e) =>
            setNewReview({ ...newReview, targetDate: e.target.value })
          }
        />
        <button onClick={addReview} className="flex w-[200px] mt-[30px]  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sbtn">Add Review</button>
        <ul className="fetch">
          {review == "" || review == null
            ? ""
            : review.map((review: any) => (
                <li key={review._id}>
                  {review.description} - {review.status}
                </li>
              ))}
        </ul>
      </div>
      <div className="head">
        <h3>Development Plan</h3>
        <input
          type="text"
          placeholder="Development Plan"
          value={newDevelopmentPlan.description}
          onChange={(e) =>
            setNewDevelopmentPlan({
              ...newDevelopmentPlan,
              description: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Rate out of 10"
          value={newDevelopmentPlan.status}
          onChange={(e) =>
            setNewDevelopmentPlan({
              ...newDevelopmentPlan,
              status: e.target.value,
            })
          }
        />
        <input
          type="date"
          value={newDevelopmentPlan.targetDate}
          onChange={(e) =>
            setNewDevelopmentPlan({
              ...newDevelopmentPlan,
              targetDate: e.target.value,
            })
          }
        />
        <button onClick={adddevelopmentPlan} className="flex w-[100px] mt-[30px] justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sbtn">Add Plan</button>
        <ul className="fetch">
          {developmentPlan == "" || developmentPlan == null
            ? ""
            : developmentPlan.map((developmentPlan: any) => (
                <li key={developmentPlan._id}>
                  {developmentPlan.description} - {developmentPlan.status}
                </li>
              ))}
        </ul>
      </div>
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
};

export default GoalComponent;
