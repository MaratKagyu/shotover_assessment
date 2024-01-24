
// The list of all available application routes
const ApiRoutes = {
  home: () => '/',
  catalog: (count = 10) => '/catalog?count=' + count
};

export default ApiRoutes;
