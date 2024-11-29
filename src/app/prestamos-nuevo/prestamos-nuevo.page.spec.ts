import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamosNuevoPage } from './prestamos-nuevo.page';

describe('PrestamosNuevoPage', () => {
  let component: PrestamosNuevoPage;
  let fixture: ComponentFixture<PrestamosNuevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
