import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { UserContext } from "../../../App";

const Sidebar = ({ gotoPage }) => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [user] = useContext(UserContext);
  console.log("🚀 ~ file: Sidebar.js ~ line 18 ~ Sidebar ~ user", user);

  useEffect(() => {
    fetch("https://doctorsportal-22.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);

  console.log(isDoctor);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 "
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li onClick={() => gotoPage(null)} className="text-white">
          <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
        </li>
        {isDoctor && (
          <>
            <li onClick={() => gotoPage("addDoctor")} className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Add Doctor</span>
            </li>
            <li>
              <Link to="/doctor/patients" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/prescriptions" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>{" "}
          </>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
