import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingInput } from './shopping-input';

describe('ShoppingInput', () => {
  let component: ShoppingInput;
  let fixture: ComponentFixture<ShoppingInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
