import React, { useEffect, useState } from 'react';
// import './App.css';
import data from './data';

function App() {
  const [posters, setPosters] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = posters.length - 1;

    if(index < 0) {
      setIndex(lastIndex);
    }
    if(index > lastIndex) {
      setIndex(0);
    }
  }, [index, posters]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {posters.map((poster, posterIndex) => {
          const {id, image} = poster;

          let position = 'nextSlide';

          if(posterIndex === index) {
            position = 'activeSlide';
          }
          if(posterIndex === index - 1 || (index === 0 && posterIndex === posters.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt="Poster" className='poster-img' />
            </article>
          )
        })}
      </div>
    </section>
  );
}

export default App;
