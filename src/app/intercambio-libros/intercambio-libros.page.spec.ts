import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntercambioLibrosPage } from './intercambio-libros.page';

describe('IntercambioLibrosPage', () => {
  let component: IntercambioLibrosPage;
  let fixture: ComponentFixture<IntercambioLibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambioLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
