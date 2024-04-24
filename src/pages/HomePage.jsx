import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import CategoryList from "../components/CategoryList";
import ViewAllCategories from "../components/ViewAllCategories";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <CategoryList isHome={true} />
      <ViewAllCategories />
    </>
  );
};

export default HomePage;
