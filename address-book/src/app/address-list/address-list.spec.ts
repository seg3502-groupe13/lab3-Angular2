import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressList } from './address-list';

describe('AddressList', () => {
  let component: AddressList;
  let fixture: ComponentFixture<AddressList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressList]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add, select and delete the current address', () => {
    const el = fixture.nativeElement as HTMLElement;
    component.addAddress();
    fixture.detectChanges();
    expect(component.addresses.length).toBe(3);
    expect(el.querySelectorAll('.address-list-element-selected').length).toBe(1);
    expect(el.querySelector('app-address-view')).toBeTruthy();

    component.deleteCurrent();
    fixture.detectChanges();
    expect(component.addresses.map(a => a.firstName)).toEqual(['Amina', 'Samir']);
    expect(el.querySelector('app-address-view')).toBeNull();
    expect(el.querySelectorAll('.address-list-element-selected').length).toBe(0);
  });
});
