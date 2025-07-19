import { Component, use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TarjetaDragronBall from './assets/components/Tarjeta.jsx'
import "./assets/css/Style.css";


  function App() {
    const [personaje, setPersonaje] = useState([]);

    /*Este fetch trae por primera vez los 10 primeros personasjes**/

    useEffect(() => {
    const getCharacter = async () => 
      { try {
        const response = await fetch(`https://dragonball-api.com/api/characters/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        const data = await response.json();
        setPersonaje(data.items);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };
      getCharacter();
    }, []);

    /*fetch para traer la segunda página de personajes */

    const pagina = async() =>{
      try{
        const response = await fetch(`https://dragonball-api.com/api/characters?page=2&limit=10`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json ();
        setPersonaje(prev => [...prev, ...data.items]);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    }
  /*página numero 3*/
    const pagina3 = async() =>{
      try{
        const response = await fetch(`https://dragonball-api.com/api/characters?page=3&limit=10`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json ();
        setPersonaje(prev => [...prev, ...data.items]);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    }
  /*página numero 4*/
    const pagina4 = async() =>{
      try{
        const response = await fetch(`https://dragonball-api.com/api/characters?page=4&limit=10`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json ();
        setPersonaje(prev => [...prev, ...data.items]);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    }
      /*página numero 5*/
    const pagina5 = async() =>{
      try{
        const response = await fetch(`https://dragonball-api.com/api/characters?page=5&limit=10`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json ();
        setPersonaje(prev => [...prev, ...data.items]);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    }

  return (                                                                                 
      <>
      
        <div className='container'>
          <h1 className='titulo'>Personajes de Dragon Ball By devJo3</h1>
          <div className='tarjetaFinal'>
            {personaje.map((personaje) => (
              <TarjetaDragronBall
                key={personaje.id}
                name={personaje.name}
                image={personaje.image}
                ki={personaje.ki}
                race={personaje.race}
                /*description={personaje.description}*/
                />
              ))}
              </div>
              <div className='botones'>
                <a href='#' onClick={e => {e.preventDefault();getCharacter()}}>1</a>
                <a href='#' onClick={e => {e.preventDefault();pagina()}}>2</a>
                <a href='#' onClick={e => {e.preventDefault();pagina3()}}>3</a> 
                <a href='#' onClick={e => {e.preventDefault();pagina4()}}>4</a> 
                <a href='#' onClick={e => {e.preventDefault();pagina5()}}>5</a> 
              </div>
          
        </div>
      
    </>
  )

}

export default App;



