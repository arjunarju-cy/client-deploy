import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}/createUser`, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <h3 className="text-center mb-4 fw-bold text-primary">
            ➕ Create New User
          </h3>

          <form onSubmit={Submit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Age</label>
              <input
                type="number"
                className="form-control rounded-3"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="d-grid gap-2 mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-3 shadow-sm"
              >
                💾 Save User
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-3"
                onClick={() => navigate("/")}
              >
                ← Back to Users
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

