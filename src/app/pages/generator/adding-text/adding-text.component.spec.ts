import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTextComponent } from './adding-text.component';

describe('AddingTextComponent', () => {
  let component: AddingTextComponent;
  let fixture: ComponentFixture<AddingTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
