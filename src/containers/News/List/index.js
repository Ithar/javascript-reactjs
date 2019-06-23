import React, { useState, useEffect } from 'react';
import NewsList from "../../../components/News/List";

const Index = (props) => {

  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('reactJS');

  const fetchNews = () => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  }

  useEffect( () =>{
      fetchNews();
  });

  const onChangeNews = (e) =>{
      setSearchTerm(e.target.value);
  };

  return(
      <NewsList news={news} onChangeNews={onChangeNews}/>
  );

};

export default Index;