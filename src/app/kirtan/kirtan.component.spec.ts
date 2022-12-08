import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirtanComponent } from './kirtan.component';

describe('KirtanComponent', () => {
  let component: KirtanComponent;
  let fixture: ComponentFixture<KirtanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KirtanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KirtanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
