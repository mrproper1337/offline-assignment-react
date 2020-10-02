import nodeFetch from 'node-fetch';

const URL = 'https://swapi.dev/api/films';

const getPromiseMap = (fetcher, set) =>
  Array.from(set.keys()).map(async (entityUrl) => {
    const res = await fetcher(entityUrl);
    return res.json();
  });

const extractMapValues = (urls, map) =>
  urls.map((url) => map.find((mapItem) => mapItem.url === url) || {});

export default async (isClient = false) => {
  const fetcher = isClient ? fetch : nodeFetch;
  const res = await fetcher(URL);
  const { results: films } = await res.json();

  const charactersToFetch = new Set();
  const planetsToFetch = new Set();

  films.forEach(({ characters, planets }) => {
    characters.forEach((character) => {
      charactersToFetch.add(character);
    });
    planets.forEach((planet) => {
      planetsToFetch.add(planet);
    });
  });

  const [characterMap, planetsMap] = await Promise.all([
    Promise.all(getPromiseMap(fetcher, charactersToFetch)),
    Promise.all(getPromiseMap(fetcher, planetsToFetch)),
  ]);

  return films.map(
    ({
      title,
      director,
      release_date,
      opening_crawl,
      characters,
      planets,
    }) => ({
      title,
      director,
      releaseDate: release_date,
      openingCrawl: opening_crawl,
      characters: extractMapValues(characters, characterMap),
      planets: extractMapValues(planets, planetsMap),
    }),
  );
};
