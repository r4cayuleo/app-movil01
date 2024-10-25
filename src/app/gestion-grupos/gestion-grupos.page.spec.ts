import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionGruposPage } from './gestion-grupos.page';

describe('GestionGruposPage', () => {
  let component: GestionGruposPage;
  let fixture: ComponentFixture<GestionGruposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
