import React ,{Fragment,useEffect} from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Navbar from "../Home/Navbar";
import Landing from "../Home/Landing";
import Footer from ".././layout/Footer/Footer";

// const product ={
//     name:"Blue Tshirt",
//     images:[{url: "https://i.ibb.co/DRST11N/1.webp"}],
//     price:"$3000",
//     _id:"nemanja",
// }
const Home = ()=>{
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if(error){
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProduct());
      }, [dispatch,error,alert]);
    
    return(
        <Fragment>
            {loading ? (<Loader/>)
            :( <Fragment>
            <MetaData title="ECOMMERCE" />
           <Navbar/>
           <Landing/>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container d-flex justify-content-center mt-50 mb-50 " id="products">
            <div className="row">
              {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
            </div>
          </div>
          <Footer/>
        </Fragment>
        )}
        </Fragment>
    )
};

export default Home;