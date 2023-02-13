// Node Modules
import React, { useRef, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// Utils
import { QUERY_CATEGORIES } from '../utils/queries';

const Topic = () => {
  const { categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.searchCategories || [];

  const categoryListUntrimmed = categories.map(c => c.category);
  const categoryList = [...new Set(categoryListUntrimmed)];

  const renderButtons = () => {
    return categoryList.map(category =>
      <button
        className='btn btn-primary m-1'
        key={category}
      >
        {category}
      </button>
    )
  }

  return (
    <main>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h4>Select a category:</h4>
            <div className='row'>
              <div className='flex-grow'>
                {renderButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Topic;
