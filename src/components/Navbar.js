import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary shadow mb-5 navbar-expand-lg">
    <div className="container">
      <Link to="/" className="navbar-brand text-white mx-2 fs-4">
        <i className="fas fa-tasks me-2"></i>ระบบบัญชีรายรับ - รายจ่าย
      </Link>
      
      {/* เพิ่มปุ่มสำหรับหน้าจอเล็ก */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* เมนูปุ่ม */}
      <div className="collapse navbar-collapse " id="navbarNav">
      <div className="navbar-nav ms-auto fs-5 d-flex flex-row gap-lg-3 justify-content-around">
          <Link to="/" className="nav-link text-white">
            <i className="fas fa-list-ul me-2"></i>ข้อมูลบัญชี
          </Link>
          <Link to="/add" className="nav-link text-white">
            <i className="fas fa-plus-circle me-2"></i>บันทึกรายรับ - รายจ่าย
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
