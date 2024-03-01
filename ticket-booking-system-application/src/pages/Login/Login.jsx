import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Footer } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is set to user
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginHandler = () => {
    // Here you would implement login logic and role-based redirection
    if (role === "admin") {
      // Redirect to admin panel
      navigate("/admin");
    } else {
      // Redirect to user dashboard
      navigate("/");
    }
  };

  return (
    <div className="min-vh-100 bg-secondary">
      <Navbar />
      <div className="container h-100 p-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black rounded">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Welcome Back!
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="me-3 fa-fw fa-lg"
                        />
                        <div className="form-floating form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control shadow-none"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label text-info">
                            Your Email
                          </label>
                        </div>
                      </div>

                      {/* Password input */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="me-3 fa-fw fa-lg"
                        />
                        <div className="form-floating form-outline flex-fill mb-0">
                          <input
                            type="password"
                            className="form-control shadow-none"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label text-info">
                            Password
                          </label>
                        </div>
                      </div>

                      {/* Role selection */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faUserCog}
                          className="me-3 fa-fw fa-lg"
                        />
                        <div className="form-floating form-outline flex-fill mb-0">
                          <label className="form-label text-info ">
                            Select Role:
                          </label>
                          <select
                            className="form-select shadow-none mt-3 "
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            // style={{ background: "transparent" }}
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                      </div>

                      {/* Error message */}
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}

                      {/* Login button */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-info px-5 py-2 rounded-pill"
                          onClick={loginHandler}
                        >
                          Login
                        </button>
                      </div>

                      {/* Register link */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <label className="form-check-label">
                          Don't have an account?
                          <Link to="/register" className="px-2">
                            Register
                          </Link>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
