import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/`)
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`${API_BASE_URL}/deleteUser/${id}`)
        .then((res) => {
          console.log(res);
          setUsers((prev) => prev.filter((user) => user._id !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg border-0 rounded-4 w-75">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
          <h4 className="mb-0 fw-bold">User Management</h4>
          <Link to="/create" className="btn btn-light fw-semibold">
            ➕ Add New User
          </Link>
        </div>

        <div className="card-body bg-white">
          <div className="table-responsive">
            <table className="table table-hover align-middle text-center">
              <thead className="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td className="fw-semibold">{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <Link
                          to={`/update/${user._id}`}
                          className="btn btn-sm btn-outline-primary me-2"
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(user._id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-muted py-4">
                      No users found 😔
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer text-muted text-center small">
          © {new Date().getFullYear()} User Management System
        </div>
      </div>
    </div>
  );
}

export default Users;
