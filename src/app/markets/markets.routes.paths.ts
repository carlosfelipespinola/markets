


const root = { name: 'Supermercados', path: 'markets' };
const home = { name: 'Inicio', path: 'home' };
const products = { name: 'Produtos', path: 'products' };

export const marketRoutesPathHierarchy = {
  root: {
    name: root.name,
    path: root.path,
    fullPath: `/${root.path}`,
    children: {
      homePage: {
        name: home.name,
        path: home.path,
        fullPath: `/${root.path}/${home.path}`,
        children: {}
      },
      productsPage: {
        name: products.name,
        path: products.path,
        fullPath: `/${root.path}/${products.path}`,
        children: {}
      }
    }
  }
}