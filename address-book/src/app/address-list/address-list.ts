import { Component, inject } from '@angular/core';
import { AddressEntry } from './address-entry';
import { AddressListElement } from './address-list-element/address-list-element';
import { AddressView } from './address-view/address-view';
import { NotificationService } from './notification-service';

@Component({
  selector: 'app-address-list',
  imports: [AddressListElement, AddressView],
  templateUrl: './address-list.html',
  styleUrl: './address-list.css',
  providers: [NotificationService]
})
export class AddressList {
  addresses: AddressEntry[] = [
    new AddressEntry('Amina', 'Tremblay', '613 555 0100', 'amina@example.test', 'Cours SEG3502'),
    new AddressEntry('Samir', 'Martin')
  ];
  currentAddress: AddressEntry | null = null;
  notificationService = inject(NotificationService);

  select(address: AddressEntry): void {
    this.currentAddress = address;
    this.notificationService.selectionChanged(address);
  }

  addAddress(): void {
    const entry = new AddressEntry('New', 'Entry');
    this.addresses = [entry, ...this.addresses];
    this.select(entry);
  }

  deleteCurrent(): void {
    this.addresses = this.addresses.filter(address => address !== this.currentAddress);
    this.currentAddress = null;
    this.notificationService.selectionChanged(null);
  }
}
