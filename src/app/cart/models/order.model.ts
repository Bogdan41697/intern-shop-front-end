import { User } from '../../auth/models/user';

export class Order {
  constructor(
    public date: number,
    public client: User,
    public total: number,
    public items: any // add correct type
  ) {}
}
