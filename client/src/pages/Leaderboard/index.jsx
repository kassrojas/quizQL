import React from "react";
// import { QUERY_ME, QUERY_USERRESULTS } from "../../utils/queries";

const Leaderboard = () => {
  //   const { loading, data } = useQuery(QUERY_ME);
  //   const user = data?.me || {};
  //   const userId = user._id;
  //   console.log(user);

  //   const { resultsLoading, data: resultsData } = useQuery(QUERY_USERRESULTS, {
  //     variables: { userId },
  //   });
  //   const results = resultsData?.userResults || [];
  //   console.log(results);

  return (
    <>
      <h1 className="text-white">Leaderboard</h1>
      <ul class="list-group">
        {/* map through result scores in descending order */}
        <li class="list-group-item active" aria-current="true">
          Highest score
        </li>
        <li class="list-group-item">#2</li>
        <li class="list-group-item">#3</li>
        <li class="list-group-item">#4</li>
        <li class="list-group-item">#5</li>
      </ul>
    </>
  );
};

export default Leaderboard;
