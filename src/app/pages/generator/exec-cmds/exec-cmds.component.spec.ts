import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecCmdsComponent } from './exec-cmds.component';

describe('ExecCmdsComponent', () => {
  let component: ExecCmdsComponent;
  let fixture: ComponentFixture<ExecCmdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecCmdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecCmdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
