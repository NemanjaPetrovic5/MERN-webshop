import './App.css';
import { useState } from "react";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import Cart from "./component/Cart/Cart";
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import axios from "axios";
import Payment from './component/Cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './component/Cart/OrderSuccess';
import MyOrders from './component/Order/MyOrders';
import OrderDetails from './component/Order/OrderDetails';
import Dashboard from './component/Admin/Dashboard';
import ProductList from './component/Admin/ProductList';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UserList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import NotFound from "./component/layout/Not Found/NotFound";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto,","Droid Sans","Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();

  },[]);
    return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
            {stripeApiKey && (
      <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>

        <Route
          path="/process/payment"
          element={
          <ProtectedRoute >
            <Payment />
          </ProtectedRoute>
          }
        />
        </Routes>

       </Elements>
       )}

        <Routes>
        <Route
          element={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>  
        <Route path="/products" element={<Products />}></Route>  
        <Route path="/products/:keyword" element={<Products />}></Route>  
        <Route path="/search" element={<Search />}></Route>  
        <Route path="/login" element={<LoginSignUp />}></Route>  
        <Route path="/account" element={<Profile/>}></Route>
        <Route path="/me/update" element={<UpdateProfile/>}></Route>  
        <Route path="/cart" element={<Cart />}></Route>  

        <Route
          path="/shipping"
          element={
          <ProtectedRoute >
            <Shipping />
          </ProtectedRoute>
          }
        />
        <Route
          path="/order/confirm"
          element={
          <ProtectedRoute >
            <ConfirmOrder />
          </ProtectedRoute>
          }
        />
        
         <Route
          path="/success"
          element={
          <ProtectedRoute >
            <OrderSuccess />
          </ProtectedRoute>
          }
        />
         <Route
          path="orders"
          element={
          <ProtectedRoute >
            <MyOrders />
          </ProtectedRoute>
          }
        />
          <Route
          path="/order/:id"
          element={
          <ProtectedRoute >
            <OrderDetails />
          </ProtectedRoute>
          }
        />
        {/* Admin */}
        <Route
          path="/admin/dashboard"
          element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          }
        />
         <Route
          path="/admin/products"
          element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
          }
        />
         <Route
          path="/admin/product"
          element={
          <ProtectedRoute>
            <NewProduct />
          </ProtectedRoute>
          }
        />
         <Route
          path="/admin/product/:id"
          element={
          <ProtectedRoute>
            <UpdateProduct />
          </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
          <ProtectedRoute>
            <UsersList />
          </ProtectedRoute>
          }
        />
         <Route
          path="/admin/user/:id"
          element={
          <ProtectedRoute>
            <UpdateUser />
          </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
          <ProtectedRoute>
            <OrderList />
          </ProtectedRoute>
          }
        />
        <Route
          path="/admin/order/:id"
          element={
          <ProtectedRoute>
            <ProcessOrder />
          </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reviews"
          element={
          <ProtectedRoute>
            <ProductReviews />
          </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
    );
}

export default App;