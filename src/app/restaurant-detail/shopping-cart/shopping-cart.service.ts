import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

    if (foundItem) {
      foundItem.quantity ++;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    const index = this.items.indexOf(item);

    this.items.splice(index,1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prevValue, currValue) => prevValue + currValue, 0);
  }
}
