import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsEditComponent } from './discussions-edit.component';

describe('DiscussionsEditComponent', () => {
  let component: DiscussionsEditComponent;
  let fixture: ComponentFixture<DiscussionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
