export const capitaliseString = (string) => {
  const capitalString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalString;
};

export const setQuery = (setState, query, queryStr) => {
  setState((currQueryString) => {
    const newQuery = { ...currQueryString };
    newQuery[query] = queryStr;
    return newQuery;
  });
};
