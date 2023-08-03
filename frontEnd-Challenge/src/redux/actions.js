export const fetchCharactersRequest = () => ({
  type: "FETCH_CHARACTERS_REQUEST",
});

export const fetchCharactersSuccess = (data) => ({
  type: "FETCH_CHARACTERS_SUCCESS",
  payload: data,
});

export const fetchCharactersFailure = (error) => ({
  type: "FETCH_CHARACTERS_FAILURE",
  payload: error,
});

