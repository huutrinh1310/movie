import React from 'react';

import { useParams } from 'react-router';
import PagerHeader from '../components/page-header/PagerHeader';
import { category as cate } from '../api/tmdbApi';

import MovieGrid from '../components/movie-grid/MovieGrid';
function Catalog() {

  const { category } = useParams();

  return (
    <div>
      <PagerHeader>
        {category === cate.movie ? 'Movie' : 'TV Series'}
      </PagerHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>
        </div>
      </div>
    </div>
  )
};

export default Catalog;
