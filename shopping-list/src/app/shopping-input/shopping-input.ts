import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-input',
  imports: [FormsModule],
  templateUrl: './shopping-input.html',
  styleUrl: './shopping-input.css',
})
export class ShoppingInput {
  itemName = '';
  @Output() addItem = new EventEmitter<string>();

  submitItem(): void {
    const clean = this.itemName.trim();
    if (clean === '') {
      return;
    }
    this.addItem.emit(clean);
    this.itemName = '';
  }
}
