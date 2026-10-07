import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  async function addItem(compiled: HTMLElement, fixture: ComponentFixture<App>, text: string) {
    const input = compiled.querySelector('input') as HTMLInputElement;
    input.value = text;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    (compiled.querySelector('form button') as HTMLButtonElement).click();
    fixture.detectChanges();
    await fixture.whenStable();
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ma liste de courses');
  });

  it('should add items, ignore blanks and remove only the targeted item', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    await addItem(compiled, fixture, '5 pommes');
    await addItem(compiled, fixture, '12 œufs');
    await addItem(compiled, fixture, '1 pain');
    expect((compiled.querySelector('input') as HTMLInputElement).value).toBe('');
    await addItem(compiled, fixture, '   ');

    let rows = Array.from(compiled.querySelectorAll('li span')).map((s) => s.textContent);
    expect(rows).toEqual(['5 pommes', '12 œufs', '1 pain']);

    (compiled.querySelectorAll('li button')[1] as HTMLButtonElement).click();
    fixture.detectChanges();

    rows = Array.from(compiled.querySelectorAll('li span')).map((s) => s.textContent);
    expect(rows).toEqual(['5 pommes', '1 pain']);
  });
});
