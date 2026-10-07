import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressEntry } from './address-entry';

@Injectable()
export class NotificationService {
  selectedElement = new BehaviorSubject<AddressEntry | null>(null);

  selectionChanged(address: AddressEntry | null): void {
    this.selectedElement.next(address);
  }
}
