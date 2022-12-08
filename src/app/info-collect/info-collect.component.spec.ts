import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCollectComponent } from './info-collect.component';

describe('InfoCollectComponent', () => {
  let component: InfoCollectComponent;
  let fixture: ComponentFixture<InfoCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCollectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
