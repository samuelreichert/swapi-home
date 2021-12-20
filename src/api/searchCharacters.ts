const URL = 'https://swapi.dev/api/people/';

const searchCharacters = ({ queryKey }: { queryKey: any }) => {
  const [,queryParams] = queryKey;
  const {
    search,
  } = queryParams;

  return fetch(`${URL}?search=${search}&limit=5`).then(res => res.json());
};

export default searchCharacters;
