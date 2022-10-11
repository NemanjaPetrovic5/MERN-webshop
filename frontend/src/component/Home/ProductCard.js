import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const Bootstrap = ({ product }) => {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };
  return (

    <div className="col-xl-3 col-md-4 col-sm-6 mt-2 ">
    <Link className="productCard " to={`/product/${product._id}`}>
        <div className="card product">
            <img src={product.images[0].url} alt={product.name} className="card-img img-fluid" width="96" height="350" />
        <div className="mb-2">
            <h6>{product.name}</h6>
        </div>
            <h3 className="mb-0">{`$${product.price}`}</h3>
        <div>
            <Rating {...options} />{" "}
            <span className="productCardSpan">
            {" "}
            </span>
        </div>
        <div className="text-muted mb-3">({product.numOfReviews} Reviews)</div>
        </div>
    </Link>

    </div> 
  );
};

export default Bootstrap;