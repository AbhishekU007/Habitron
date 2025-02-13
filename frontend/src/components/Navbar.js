import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const DarkMode = () => {
//     return (
//       <div className="toggle-theme-wrapper">
//         <span><i class="fa-regular fa-sun"></i></span>
//         <label className="toggle-theme" htmlFor="checkbox">
//           <input
//             type="checkbox"
//             id="checkbox"
//           />
//           <div className="slider round"></div>
//         </label>
//         <span><i class="fa-regular fa-moon"></i></span>
//       </div>
//     );
//   };

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Habitron</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/about">About Us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/signup">Get Started</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/login">Sign In</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/"><i class="fa-regular fa-bell"></i></a>
            </li>
            <li className="nav-item mx-1">
            <a className="nav-link active" href="/"><i class="fa-regular fa-moon"></i></a>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
  );
}

export default Navbar;
