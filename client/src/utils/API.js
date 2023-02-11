import axios from 'axios';

const triviaSearch = async (amount, category, difficulty, type) => 
  axios.get(`
    https://opentdb.com/api.php
    ?amount=${amount}
    &category=${category}
    &difficulty=${difficulty}
    &type=${type}
    `);

export default triviaSearch;