import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../slice/productSlice";
import { useFetchProductsMutation } from "../slice/weatherApiSlice";

const ECart = () => {
  const dispatch = useDispatch();
  const [fetchProducts, { isLoading }] = useFetchProductsMutation();
  const { products } = useSelector((state) => state.productData);

  const fetch = async () => {
    try {
      const res = await fetchProducts().unwrap();
      dispatch(setProducts(res));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </>
  );
};

export default ECart;
