import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    file: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "file" ? files[0] : value,
    });
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault(formData);
    // Handle registration logic here, e.g., sending data to a server
    // console.log("Form submitted with data:", formData);
    
  };

  return (
    <div className="fromContainer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="fromWrapper">
              <h2 className="text-center">Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="mb-3 col-lg-6 col-md-3 ">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="User Name"
                    required
                  />
                </div>
                <div className="mb-3 col-lg-6 col-md-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="mb-3 col-lg-6 col-md-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mb-3 col-lg-6 col-md-3">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control password-input"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="file"
                    name="file"
                    onChange={handleChange}
                    placeholder="File"
                    required
                  />
                </div>
                <div className="btn_d-flex">
                  <input type="submit" value='Create Account' className="btn btn-primary"/>
                   
                 
                  <p>
                  Already have an Accont?<a href="">Sing in</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
