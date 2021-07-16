import React from 'react';
import './about.css';

const About = () => (
  <section>
    <h2>{`About ` + `Pokédex`}</h2>
    <section>
      <p>
        This application simulates a Pokédex, a
        digital encliclopedia containing all Pokémons
      </p>
      <p>One can filter Pokémons by type, and see more details for each one of them</p>
      <img
        className="pokedex-image"
        src={`https://cdn2.bulbagarden.net/upload/thumb/d/d2/Pok%C3%A9mon_logo_English.png/800px-Pok%C3%A9mon_logo_English.png`}
        alt="Pokédex"
      />
    </section>
  </section>
);

export default About;
