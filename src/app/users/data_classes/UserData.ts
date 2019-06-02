
export enum UserRoles {
  MARKET_OWNER_ROLE = 'marketOwner',
  BUYER_ROLE = 'buyer'
}

export interface IUserData {
  email: string;
  uid: string;
  role: UserRoles,
}

export class UserData implements IUserData {
  public email: string;
  public uid: string;
  public role: UserRoles;

  constructor(data: IUserData | any) {
    if (data == null) {
      data = {};
    }
    this.email = data.email || null;
    this.uid = data.uid || null;
    this.role = data.role || null;
  }
}
