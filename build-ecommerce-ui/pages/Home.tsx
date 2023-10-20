import React from "react";
import NewArrivals from "../modules/home/molecules/NewArrivals";
import Categories from "../modules/home/molecules/Categories";
import ProductView from "../modules/home/molecules/ProductView";

const Home = () => {
  return (
    <>
      <NewArrivals />
      <Categories />
      <ProductView />
    </>
  );
};

export default Home;
