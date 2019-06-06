
export const buyersHomePageRoutePath = 'buyers/find-market';
export const buyersBuyProductAtMarketPageRoutePath = 'buyers/buy-products-at-market/:market';

const root = { name: 'Clientes', path: 'buyers' };
const findMarket = { name: 'Supermercados', path: 'find-market' };
const buyProductsAtMarket = { name: 'Produtos do supermercado', path: 'buy-products-at-market/:market' };

export const buyersRoutesPathHierarchy = {
  root: {
    name: root.name,
    path: root.path,
    fullPath: `/${root.path}`,
    children: {
      findMarket: {
        name: findMarket.name,
        path: `${root.path}/${findMarket.path}`,
        fullPath: `/${root.path}/${findMarket.path}`,
        children: {}
      },
      buyProductsAtMarket: {
        name: buyProductsAtMarket.name,
        path: `${root.path}/${buyProductsAtMarket.path}`,
        fullPath: `/${root.path}/${buyProductsAtMarket.path}`,
        children: {}
      }
    }
  }
}