import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilaPrabhupadaComponent } from './srila-prabhupada.component';

describe('SrilaPrabhupadaComponent', () => {
  let component: SrilaPrabhupadaComponent;
  let fixture: ComponentFixture<SrilaPrabhupadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrilaPrabhupadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrilaPrabhupadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
