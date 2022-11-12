import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import { Col, Row } from "reactstrap";
import DashboardCards from "../Admin/dashboard/DashboardCards";
import UserOptions from "../layout/Header/UserOptions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });
  
    useEffect(() => {
  
      dispatch(getAdminProduct());
      dispatch(getAllOrders());
      dispatch(getAllUsers());
    }, [dispatch]);
    let totalAmount = 0;
    orders &&
      orders.forEach((item) => {
        totalAmount += item.totalPrice;
      });

  return (
    <div className="dashboard">
      <Sidebar />
       <MetaData title="Dashboard - Admin Panel" />
       {isAuthenticated && <UserOptions user={user} />}

       <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <Row>
        <Col sm="6" lg="12" className="totalAmount">
          <DashboardCards 
            bg="bg-light-info text-into"
            title="Total Amount"
            subtitle="Total Amount"
            earning={parseFloat(totalAmount.toFixed(2))}
            icon="bi bi-bag"
          />
        </Col>
        <Col sm="6" lg="4">
        <Link to="/admin/products" className="adminLinks">
          <DashboardCards
            bg="bg-light-success text-success"
            title="Products"
            subtitle="Products"
            earning={products && products.length}
            icon="bi bi-wallet"
          />
        </Link>
        </Col>
        <Col sm="6" lg="4">
        <Link to="/admin/users" className="adminLinks">
          <DashboardCards
            bg="bg-light-danger text-danger"
            title="Users"
            subtitle="Users"
            earning={users && users.length}
            icon="bi bi-coin"
          />
        </Link>
        </Col>
        <Col sm="6" lg="4">
        <Link to="/admin/orders" className="adminLinks">
          <DashboardCards
            bg="bg-light-warning text-warning"
            title="Orders"
            subtitle="Orders"
            earning={orders && orders.length}
            icon="bi bi-basket3"
          />
        </Link>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default Dashboard;