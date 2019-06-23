
export const buyersHomePageRoutePath = 'buyers/find-market';
export const buyersBuyProductAtMarketPageRoutePath = 'buyers/buy-products-at-market/:market';

const root = { name: 'Clientes', path: 'buyers' };
const findMarket = { name: 'Supermercados', path: 'find-market' };
const buyProductsAtMarket = { name: 'Produtos do supermercado', path: 'buy-products-at-market/:market' };
const checkout = { name: 'Checkout', path: 'checkout/:market/:user' };
const order = { name: 'Order', path: 'orders/:order' };
const orders = { name: 'Orders', path: 'orders' };

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
      },
      checkout: {
        name: checkout.name,
        path: `${root.path}/${checkout.path}`,
        fullPath: `/${root.path}/${checkout.path}`,
        children: {}
      },
      orders: {
        name: orders.name,
        path: `${root.path}/${orders.path}`,
        fullPath: `/${root.path}/${orders.path}`,
        children: {}
      },
      order: {
        name: order.name,
        path: `${root.path}/${order.path}`,
        fullPath: `/${root.path}/${order.path}`,
        children: {}
      }
    }
  }
}