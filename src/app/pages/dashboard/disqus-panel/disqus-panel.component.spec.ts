import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqusPanelComponent } from './disqus-panel.component';

describe('DisqusPanelComponent', () => {
  let component: DisqusPanelComponent;
  let fixture: ComponentFixture<DisqusPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqusPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqusPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
