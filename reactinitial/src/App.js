import React, { useEffect, useState } from 'react';
import LoadingMask from './components/LoadingMask';
import './style.css';

import Character from './components/Character';
import Subscription from './components/Subscription';
import Card from './components/Card';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [characters, setCharacters] = useState([]);

  //   const getData = async () => {
  //     const response = await axios.get(
  //       'https://seriescharacters.com/api/howimetyourmouther'
  //     );
  //     setCharacters(response.data);
  //     console.log(characters);
  //   };

  useEffect(() => {
    fetch('https://seriescharacters.com/api/howimetyourmother')
      .then((response) => response.json())
      .then((json) => setCharacters(json));
    setTimeout(() => {
      setIsLoading(false);
    }, 5 * 1000);
  }, []);

  const data = [
    {
      title: 'Mango Bay',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Távoli Galaxis',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Luquid Cocaine',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Organic Chocolate Stout',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Bracia',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Mango Bay',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Mango Bay',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Vintage Ale',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'All the Leaves as Brown',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
    {
      title: 'Mango Bay',
      sub: 'Mad Scientist Beer',
      text: 'Pale Ale - American',
    },
  ];
  return (
    <div>
      {/* <h1>Series Api</h1>
      <LoadingMask isLoading={isLoading} />
      {characters.map((d, i) => (
        <div key={i}>
          <Character data={d} isLoading={isLoading} />
        </div>
      ))}
      <Subscription isSubscribe={isSubscribe} setIsSubscribe={setIsSubscribe} /> */}
      <div className="header">
        <div className="logo">Best Beers</div>
        <div className="menu">
          <MenuIcon />
        </div>
      </div>
      <div className="cards_container">
        {data.map((d, i) => (
          <div className="card_container">
            <div key={i} className="number">
              {i + 1}
            </div>
            <Card data={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
