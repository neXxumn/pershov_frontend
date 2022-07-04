import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card/Card';
import Preloader from '../components/Preloader/Preloader';

import { getPostRequest } from '../redux/actions';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostRequest());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.errorMessage);
  const isFetching = useSelector((state) => state.posts.isFetching);

  if (error) return <p className="error">{error}</p>;
  if (isFetching) return <Preloader />;

  return (
    <div className="mainPageContainer">
      {
        posts.map((item) => (
          <Card
            title={item.title}
            content={item.content}
            image={item.image}
            key={item.id}
          />
        ))
      }
    </div>
  );
}
export default memo(MainPage);
