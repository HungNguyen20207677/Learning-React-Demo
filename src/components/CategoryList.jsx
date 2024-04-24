import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import Spinner from "./Spinner";

const CategoryList = ({ isHome = false }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiUrl = isHome
        ? "/api/admin/categories/pagination?currentPage=0&pageSize=3"
        : "/api/admin/categories";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (isHome) {
          const categoriesList = data.content; // Extracting the categories list
          setCategories(categoriesList);
        } else {
          setCategories(data);
        }
      } catch (err) {
        console.log("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Categories" : "Browse Categories"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryItem key={category.categoryId} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryList;
