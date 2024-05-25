import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import './products.css'

const Products2 = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/api/product/get-all");
        const responseData = await response.json();
        const products = responseData.data; // Truy cập vào mảng sản phẩm trong dữ liệu trả về
        setData(products);
        setFilter(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      componentMounted = false;
    };
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilter(filteredProducts);
  };

  const filterProduct = (type) => {
    const filteredProducts = data.filter((product) => product.type.toLowerCase() === type.toLowerCase());
    setFilter(filteredProducts);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => (
          <div key={product._id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Card"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.name}
                </h5>
                <p className="card-text">
                  {product.description}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <Link to={`/product/${product._id}`} className="btn btn-dark m-1">
                  Detail
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <input
              type="text"
              className="search-bar"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <hr />
            <div className="buttons text-center py-5">
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
                Women's Clothing
              </button>
              <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("unisex clothing")}>Unisex Clothing</button>
        
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products2;
