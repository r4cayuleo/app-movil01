import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutoriasNuevaPage } from './tutorias-nueva.page';

describe('TutoriasNuevaPage', () => {
  let component: TutoriasNuevaPage;
  let fixture: ComponentFixture<TutoriasNuevaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoriasNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
