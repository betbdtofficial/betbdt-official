import { DashboardRounded, Edit, PeopleAltRounded } from "@material-ui/icons";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <nav sticky="top">
          <Container>
            <li>
              <Link
                to="/admin"
              >
                <span className='icon'>
                  <DashboardRounded />
                </span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/userList">
                <span className='icon'>
                  <PeopleAltRounded />
                </span>
                User List
              </Link>
            </li>
            <li>
              <Link to="/admin/productManager">
                <span className='icon'>
                  <Edit />
                </span>
                Edit Product
              </Link>
            </li>
          </Container>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
