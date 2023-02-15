import React, { useRef, useState } from 'react';

const Score = (props) => {
  if (props.category === 'All Topics') {
    console.log('Score Component: All Results');
    return props.allResults.map(result =>
      <>
        <li
          key={result._id}
        >
          {`${result.category} - ${result.score}`}
        </li>
      </>
    )
  } else {
    console.log('Score Component: Results by Cat');
    return props.resultsByCategory.map(result =>
      <>
        <li key={result._id}>
          {result.score}
        </li>
      </>
      )
  }
}

export default Score;
