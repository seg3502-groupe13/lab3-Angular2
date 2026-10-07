import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressEntry } from '../address-entry';

@Component({
  selector: 'app-address-view',
  imports: [FormsModule],
  templateUrl: './address-view.html',
  styleUrl: './address-view.css'
})
export class AddressView {
  @Input({ required: true }) address!: AddressEntry;
  @Output() fireDelete = new EventEmitter<AddressEntry>();
  edit = true;

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address);
  }
}
