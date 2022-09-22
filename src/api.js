export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
  },
};

export const GEO_API_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo`;
