import React from "react";
import NewArrivals from "../modules/home/molecules/NewArrivals";
import Categories from "../modules/home/molecules/Categories";
import ProductView from "../modules/home/molecules/ProductView";
import Menu from "../modules/home/molecules/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <NewArrivals />
      <Categories />
      <ProductView />
    </>
  );
};

export default Home;
