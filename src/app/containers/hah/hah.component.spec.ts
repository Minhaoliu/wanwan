import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HahComponent } from './hah.component';

describe('HahComponent', () => {
  let component: HahComponent;
  let fixture: ComponentFixture<HahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
