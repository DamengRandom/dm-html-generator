import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsPreviewComponent } from './contents-preview.component';

describe('ContentsPreviewComponent', () => {
  let component: ContentsPreviewComponent;
  let fixture: ComponentFixture<ContentsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
