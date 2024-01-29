import React from 'react';
import '../App.css';
import star from '../res/star.png';
import fork from '../res/fork.png';
import watch from '../res/watchers.png';
const Repos = ({ obj }) => {
  const cards = obj
    ? obj.map((item) => (
        <div className='repo_card' key={item.id}>
          <h3 onClick={()=>window.open(item.html_url)}>{item.name}</h3>
          <h4 className='desc'>{item.description ? item.description : "Not Available"}</h4>
          <div className="stats">
            <h4>
              <img src={star} alt="star" />
              {item.stargazers_count}
            </h4>
            <h4>
              <img src={fork} alt="fork" />
              {item.forks_count}
            </h4>
            <h4>
              <img src={watch} alt="watch" />
              {item.watchers_count}
            </h4>
          </div>
        </div>
      ))
    : null;

  return (
    <div className='repos'>
      {cards}
    </div>
  );
}

export default Repos;
