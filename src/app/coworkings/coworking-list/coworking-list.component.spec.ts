import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingListComponent } from './coworking-list.component';

describe('CoworkingListComponent', () => {
  let component: CoworkingListComponent;
  let fixture: ComponentFixture<CoworkingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
