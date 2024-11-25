import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTutoriaPage } from './detalle-tutoria.page';

describe('DetalleTutoriaPage', () => {
  let component: DetalleTutoriaPage;
  let fixture: ComponentFixture<DetalleTutoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTutoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
