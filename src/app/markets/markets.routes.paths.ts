


const root = { name: 'Supermercados', path: 'markets' };
const home = { name: 'Inicio', path: 'home' };
const products = {
  name: 'Produtos',
  path: 'products',
  children: {
    createProduct: { name: 'Cadastrar Produto', path: 'create-product', children: {} },
    updateProduct: { name: 'Atualizar Produto', path: 'update-product/:product', children: {} }
  }
};
const myBusiness = { name: 'Meu estabelecimento', path: 'my-businness' };

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
        children: {
          createProductPage: {
            name: products.children.createProduct.name,
            path: products.children.createProduct.path,
            fullPath: `/${root.path}/${products.path}/${products.children.createProduct.path}`
          },
          updateProductPage: {
            name: products.children.updateProduct.name,
            path: products.children.updateProduct.path,
            fullPath: `/${root.path}/${products.path}/${products.children.updateProduct.path}`
          },
        }
      },
      myBusinessPage: {
        name: myBusiness.name,
        path: myBusiness.path,
        fullPath: `/${root.path}/${myBusiness.path}`,
        children: {}
      }
    }
  }
}