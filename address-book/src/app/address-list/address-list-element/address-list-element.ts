import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { AddressEntry } from '../address-entry';
import { NotificationService } from '../notification-service';

@Component({
  selector: 'app-address-list-element',
  imports: [NgClass],
  templateUrl: './address-list-element.html',
  styleUrl: './address-list-element.css'
})
export class AddressListElement implements OnInit, OnDestroy {
  @Input({ required: true }) address!: AddressEntry;
  selected = false;
  subscription?: Subscription;
  notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement
      .subscribe(current => this.selected = current === this.address);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getFullName(): string {
    return `${this.address.firstName}, ${this.address.lastName}`;
  }
}
