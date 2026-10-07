import { Component } from '@angular/core';
import { ShoppingInput } from './shopping-input/shopping-input';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [ShoppingInput, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items: string[] = [];

  onAddItem(name: string): void {
    this.items = [...this.items, name];
  }

  onRemoveItem(index: number): void {
    this.items = this.items.filter((_, i) => i !== index);
  }
}
