import React from "react";
import { Route, Routes, Link, Router, useSearchParams, useLocation } from "react-router-dom";
import ImgeProduct from "../../components/DashboardTemplate/ImgeProduct";
import getProducts from "../../data/products";

export default function Products() {
  const products = getProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  console.log(location.search);

  return (
    <>
      <h1>Products</h1>
      <input
        className="form-control mb-4"
        placeholder="filter"
        value={searchParams.get("filter")}
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) setSearchParams({ filter: e.target.value });
          else setSearchParams({});
        }}
      />
      <table className="table">
        <thead></thead>
        <tbody>
          {products
            .filter((item) => {
              const filter = searchParams.get("filter")
              if(!filter) return true;
              return item.title.toLowerCase().includes(filter);
              
            })
            .map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`${item.id}${location.search}` } className="btn btn-primary">
                    show
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Routes>
        <Route index element={<h1>Plase Select Product for see image! </h1>} />
        <Route path=":id" element={<ImgeProduct />} />
      </Routes>
    </>
  );
}
