import { InCartProduct } from 'src/app/cart/data-classes/InCartProduct';
import { BuyerAddress } from 'src/app/buyers/data_classes/BuyerAddress';

export enum OrderStatus { pending, confirmed, canceled, delivered, outForDelivery  }

export class IOrder {
  userUid: string;
  marketUid: string;
  uid: string;
  status: OrderStatus;
  products: Array<InCartProduct>;
  deliveryAddress: BuyerAddress;
}

export class Order implements IOrder {

  public userUid: string;
  public marketUid: string;
  public uid: string;
  public status: OrderStatus;
  public products: InCartProduct[];
  public deliveryAddress: BuyerAddress;

  constructor(data?: IOrder | any) {
    if (!data) {
      data = { userUid: null, marketUid: null, products: [], status: null, uid: null, deliveryAddress: new BuyerAddress() };
    }
    this.userUid = data.userUid || null;
    this.marketUid = data.marketUid || null;
    this.uid = data.uid || null;
    this.status = isNaN(data.status) ? null : data.status;
    this.products = Array.isArray(data.products) ? data.products : [];
    this.deliveryAddress = data.deliveryAddress || new BuyerAddress();
  }

  public get price() {
    if(this.products.length == 0) return 0;
    return this.products
    .map((inCartProduct) => inCartProduct.product.price * inCartProduct.quantity)
    .reduce((priceCount, price) => priceCount + price);
  }

  public get statusString() { 
    switch(this.status) {
      case OrderStatus.pending:
        return "Pendente";
      case OrderStatus.confirmed:
        return "Pedido confirmado";
      case OrderStatus.delivered:
        return "Pedido entregue";
      case OrderStatus.outForDelivery:
        return "Pedido saiu para entrega";
      case OrderStatus.canceled:
        return "Pedido cancelado pelo restaurante";
      default:
        return "Erro";
    }
  }

  public toObject() {
    return JSON.parse(JSON.stringify(this));
  }
}