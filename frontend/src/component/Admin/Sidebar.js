// import { Nav, NavItem ,Button} from "reactstrap";
// import "./sidebar.css";
// import { Link, useLocation } from "react-router-dom";

// const navigation = [
//   {
//     title: "Dashboard",
//     href: "/admin/dashboard",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Products",
//     href: "/admin/products",
//     icon: "bi bi-bell",
//   },
//   {
//     title: "Add new product",
//     href: "/admin/product",
//     icon: "bi bi-patch-check",
//   },
//   {
//     title: "Users",
//     href: "/admin/users",
//     icon: "bi bi-hdd-stack",
//   },
//   {
//     title: "Orders",
//     href: "/admin/orders",
//     icon: "bi bi-card-text",
//   },
//   {
//     title: "Reviews",
//     href: "/admin/dashboard",
//     icon: "bi bi-columns",
//   },
// ];

// const Sidebar = () => {
//   const showMobilemenu = () => {
//     document.getElementById("sidebarArea").classList.toggle("showSidebar");
//   };
//   let location = useLocation();

//   return (
//     <div className="p-3" >
//       <div className="d-flex align-items-center">
//         <Button
//           close
//           size="sm"
//           className="ms-auto d-lg-none"
//           id="sidebarArea"
//           onClick={() => showMobilemenu()}
//         ></Button>
//       </div>
//       <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>

//       <div className="pt-4 mt-2">
//         <Nav vertical className="sidebarNav">
//           {navigation.map((navi, index) => (
//             <NavItem key={index} className="sidenav-bg">
//               <Link
//                 to={navi.href}
//                 className={
//                   location.pathname === navi.href
//                     ? "text-primary nav-link py-3"
//                     : "nav-link text-secondary py-3"
//                 }
//               >
//                 <i className={navi.icon}></i>
//                 <span className="ms-3 d-inline-block">{navi.title}</span>
//               </Link>
//             </NavItem>
//           ))}
//         </Nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import "./sidebar.css";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/admin/users",
            name:"Users",
            icon:<FaUserAlt/>
        },
        {
            path:"/admin/orders",
            name:"Orders",
            icon:<FaRegChartBar/>
        },
        {
            path:"/admin/products",
            name:"Product List",
            icon:<FaThList/>
        },
        {
          path:"/admin/product",
          name:"New product",
          icon:<FaThList/>
      }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin panel</h1>
                   <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;