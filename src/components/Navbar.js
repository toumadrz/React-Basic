import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary shadow mb-5">
    <div className="container">
      <Link to="/" className="navbar-brand text-white">
        <i className="fas fa-tasks me-2"></i>ระบบบัญชีรายรับ - รายจ่าย
      </Link>
      <div className="navbar-nav d-flex flex-row gap-3">
        <Link to="/" className="navbar-brand text-white">
          <i className="fas fa-list-ul me-2"></i>ข้อมูลบัญชี
        </Link>
        <Link to="/add" className="navbar-brand text-white">
          <i className="fas fa-plus-circle me-2"></i>บันทึกรายรับ - รายจ่าย
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
