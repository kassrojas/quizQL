// Node Modules
import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// Utils
import { QUERY_CATEGORIES } from "../../utils/queries";
import "./index.css";

const Topic = () => {
  const { categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.searchCategories || [];

  const categoryListUntrimmed = categories.map((c) => c.category);
  const categoryList = [...new Set(categoryListUntrimmed)];

  const renderButtons = () => {
    return categoryList.map((category) => (
      <a href={`/quiz/:${category}`} key={category}>
        <button className="btn topicsBtn">{category}</button>
      </a>
    ));
  };

  return (
    <main>
      <div className="container">
        <div className="card topicCard">
          <div className="card-body topicCard">
            <h4 className="text-center text-white">
              Select a Topic To Begin Quiz:
            </h4>
            <div className="row">
              <div className="col">
                <div className="btn-group-vertical">{renderButtons()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Topic;
