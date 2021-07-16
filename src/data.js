const pokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466359/pikachu_n0am7h.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/e/e3/FL_Viridian_Forest.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/9/99/FL_Power_Plant.png',
      },
    ],
    summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466486/Charmander_g9gbpw.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/d/d5/FL_Seafoam_Islands.png',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://cdn2.bulbagarden.net/upload/5/54/FL_Lost_Cave.png',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://cdn2.bulbagarden.net/upload/9/95/FL_Altering_Cave.png',
      },
      {
        location: 'Kanto Rock Tunnel',
        map: 'https://cdn2.bulbagarden.net/upload/9/99/FL_Icefall_Cave.png',
      },
    ],
    summary: 'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.',
  },
  {
    id: 10,
    name: 'Caterpie',
    type: 'Bug',
    averageWeight: {
      value: '2.9',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466694/Caterpie_lmpbrq.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 30',
        map: 'https://cdn2.bulbagarden.net/upload/e/e3/FL_Viridian_Forest.png',
      },
      {
        location: 'Johto Route 31',
        map: 'https://cdn2.bulbagarden.net/upload/c/c1/FL_Digletts_Cave.png',
      },
    ],
    summary: 'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.',
  },
  {
    id: 23,
    name: 'Ekans',
    type: 'Poison',
    averageWeight: {
      value: '6.9',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466813/Ekans_zcwixj.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Goldenrod Game Corner',
        map: 'https://cdn2.bulbagarden.net/upload/d/da/FL_Dotted_Hole.png',
      },
    ],
    summary: 'It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however.',
  },
  {
    id: 65,
    name: 'Alakazam',
    type: 'Psychic',
    averageWeight: {
      value: '48.0',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466903/Alakazam_vwjds9.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Unova Accumula Town',
        map: 'https://cdn2.bulbagarden.net/upload/6/65/FL_Silph_Company.png',
      },
    ],
    summary: 'Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes.',
  },
  {
    id: 151,
    name: 'Mew',
    type: 'Psychic',
    averageWeight: {
      value: '4.0',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626466998/Mew_hf4qjs.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Faraway Island',
        map: 'https://cdn2.bulbagarden.net/upload/a/a1/FL_Tanoby_Chambers.png',
      },
    ],
    summary: 'Apparently, it appears only to those people who are pure of heart and have a strong desire to see it.',
  },
  {
    id: 78,
    name: 'Rapidash',
    type: 'Fire',
    averageWeight: {
      value: '95.0',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626467071/Rapidash_s49lhe.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Route 28',
        map: 'https://cdn2.bulbagarden.net/upload/9/99/FL_Icefall_Cave.png',
      },
      {
        location: 'Johto Mount Silver',
        map: 'https://cdn2.bulbagarden.net/upload/7/7d/FL_Mt._Ember.png',
      },
    ],
    summary: 'At full gallop, its four hooves barely touch the ground because it moves so incredibly fast.',
  },
  {
    id: 143,
    name: 'Snorlax',
    type: 'Normal',
    averageWeight: {
      value: '460.0',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626467144/Snorlax_dbcuv7.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Vermillion City',
        map: 'https://cdn2.bulbagarden.net/upload/5/5c/FL_Safari_Zone.png',
      },
    ],
    summary: 'What sounds like its cry may actually be its snores or the rumblings of its hungry belly.',
  },
  {
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://res.cloudinary.com/dppr8dksd/image/upload/v1626467216/Dragonair_w1avqz.gif',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 45',
        map: 'https://cdn2.bulbagarden.net/upload/6/63/FL_Pokemon_Mansion.png',
      },
      {
        location: 'Johto Dragon\'s Den',
        map: 'https://cdn2.bulbagarden.net/upload/5/54/FL_Lost_Cave.png',
      },
    ],
    summary: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
  },
];

export default pokemons;
