import './App.css';
import {User}from './User'
function App() {
  const planets = [
    {name:"Mars",isGasPlanet:false},
    {name:"Earth",isGasPlanet:false},
    {name:"Neptune",isGasPlanet:true},
    {name:"Urnus",isGasPlanet:true},
    {name:"Jupiter",isGasPlanet:true},
    {name:"Venus",isGasPlanet:false},
  ];  

return (
<div className="App">
  {planets.map(
    (planet,key) => planet.isGasPlanet && <h1>{planet.name}</h1>
  )}
</div>
);
}


export default App;
