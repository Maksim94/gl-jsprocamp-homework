// с помощью Fetch API и swapi.co API получить следующие данные
// Климат на любой планете по её имени
// {planetName} – String
const getPlanetUrl = planetName => `https://swapi.co/api/planets/?search=${planetName}`;
const getProfileUrl = name => `https://swapi.co/api/people/?search=${name}`;
const getStarshipsUrl = shipName => `https://swapi.co/api/starships/?search=${shipName}`;

async function sendRequest(url) {
  try {
    const response = await fetch(url);
    const { results } = await response.json();

    return results;
  } catch (error) {
    throw new Error ('Error while fetching', error);
  }
}

const checkResult = ({ results }) => results && results[0];

async function getClimate (planetName) {
  try {
    const planets = await sendRequest(getPlanetUrl(planetName));
    const { climate } = planets[0];

    return climate;
  } catch (error) {
    throw new Error('Error', error);
  }
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
async function getProfile (name) {
  try {
    const profiles = await sendRequest(getProfileUrl(name));
    return profiles[0];
  } catch (error) {
    throw new Error('Something went wrong', error);
  }
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
async function getPilots (starshipName) {
  try {
    const vehicles = await sendRequest(getStarshipsUrl(starshipName));
    const { pilots: pilotUrls } = vehicles[0];

    const result = await Promise.all(pilotUrls.map(url =>
      fetch(url).then(data => data.json().then(people => people.name))
    ));

    return result;
  } catch (error) {
    throw new Error ('Error', error);
  }
}


export default {
  getClimate,
  getProfile,
  getPilots
}
