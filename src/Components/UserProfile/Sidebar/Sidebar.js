import React from 'react';
import { AiFillEdit, AiFillPlusCircle } from "react-icons/ai";
import { SiGoogletagmanager } from "react-icons/si";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
      <ul>
        <Link to="/manageProduct">
          {" "}
          <li>
            <div className="sidebarIcons">
              <SiGoogletagmanager />
            </div>
            Manage Product
          </li>
        </Link>
        <Link to="/addProduct">
          <li>
            <div className="sidebarIcons">
              <AiFillPlusCircle />
            </div>
            Add Product
          </li>
        </Link>
        <Link to="/">
          {" "}
          <li>
            <div className="sidebarIcons">
              <AiFillEdit />
            </div>
            Edit Product
          </li>
        </Link>
      </ul>
    </div>
        </div>
    );
};

export default Sidebar;