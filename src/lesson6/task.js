// с помощью Fetch API и swapi.co API получить следующие данные
const STATUS_OK = 200;
// Климат на любой планете по её имени
// {planetName} – String
const getPlanetEndPoint = planetName => `https://swapi.co/api/planets/?search=${planetName}`;
const getProfileEndPoint = name => `https://swapi.co/api/people/?search=${name}`;
const getVehicleEndPoint = shipName => `https://swapi.co/api/vehicles/?search=${shipName}`;

const sendRequest = endPoint => fetch(endPoint).then(response => 
  response.json().then(data => ({
    success: response.status === STATUS_OK,
    data,
  }))
);

const checkResult = ({ results }) => results && results[0];

async function getClimate (planetName) {
    const { data, success } = await sendRequest(getPlanetEndPoint(planetName));

    if (!success) throw new Error(`Error: ${data.detail}`);

    if (checkResult(data)) {
      const { climate } = data.results[0];
      return climate;
    } else {
      throw new Error('Something went wrong');
    }
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
async function getProfile (name) {
  const { data, success } = await sendRequest(getProfileEndPoint(planetName));

  if (!success) throw new Error(`Error: ${data.detail}`);

  if (checkResult(data)) {
    return data.results[0];
  } else {
    throw new Error('Something went wrong');
  }
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
async function getPilots (starshipName) {
  const { data, success } = await sendRequest(getVehicleEndPoint(starshipName));

  if (!success) throw new Error(`Error: ${data.detail}`);

  if (checkResult(data)) {
    const { pilots: pilotUrls } = data.results[0];
    const { data: pilots } = await Promise.all(pilotUrls.map(pilotUrl => sendRequest(pilotUrl)));

    return pilots.map(pilot => pilot.name);
  } else {
    throw new Error('Something went wrong');
  }
}


export default {
  getClimate,
  getProfile,
  getPilots
}
