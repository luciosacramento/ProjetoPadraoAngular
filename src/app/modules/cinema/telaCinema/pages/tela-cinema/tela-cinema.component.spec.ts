import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCinemaComponent } from './tela-cinema.component';

describe('TelaCinemaComponent', () => {
  let component: TelaCinemaComponent;
  let fixture: ComponentFixture<TelaCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCinemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
