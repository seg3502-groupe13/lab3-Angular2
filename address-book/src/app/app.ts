import { Component } from '@angular/core';
import { Header } from './header/header';
import { AddressList } from './address-list/address-list';

@Component({
  selector: 'app-root',
  imports: [Header, AddressList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
