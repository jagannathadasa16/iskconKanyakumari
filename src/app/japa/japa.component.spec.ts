import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaComponent } from './japa.component';

describe('JapaComponent', () => {
  let component: JapaComponent;
  let fixture: ComponentFixture<JapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
