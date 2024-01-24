import Api from "./Api";

// The list of all available API endpoints
const ApiRoutes = {
  getDogList: (count) => Api.get('/api/data', {params: {count}}),
};

export default ApiRoutes;
