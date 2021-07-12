import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingEditComponent } from './coworking-edit.component';

describe('CoworkingEditComponent', () => {
  let component: CoworkingEditComponent;
  let fixture: ComponentFixture<CoworkingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
