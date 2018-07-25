import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPanelComponent } from './intro-panel.component';

describe('IntroPanelComponent', () => {
  let component: IntroPanelComponent;
  let fixture: ComponentFixture<IntroPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
