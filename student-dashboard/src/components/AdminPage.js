import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Admin.css";
const AdminPage = () => {
  const navigate = useNavigate();

  // Simulate user authentication check
  const isAuthenticated = true; // Replace with actual authentication logic

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="admin-page">
      {/* Logout button */}
      <div className="logout-btn-box">
        <button className="logout-btn" onClick={() => navigate('/login')}>
          Logout
        </button>
      </div>

      {/* Action boxes */}
      <div className="action-boxes">
        <div className="action-box" onClick={() => console.log('View')}>
          View
        </div>
        <div className="action-box" onClick={() => console.log('Add')}>
          Add
        </div>
        <div className="action-box" onClick={() => console.log('Delete')}>
          Delete
        </div>
        <div className="action-box" onClick={() => console.log('Edit')}>
          Edit
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
