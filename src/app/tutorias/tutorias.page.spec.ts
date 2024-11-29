import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutoriasPage } from './tutorias.page';

describe('TutoriasPage', () => {
  let component: TutoriasPage;
  let fixture: ComponentFixture<TutoriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
