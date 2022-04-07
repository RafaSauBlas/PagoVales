import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmDistribComponent } from './frm-distrib.component';

describe('FrmDistribComponent', () => {
  let component: FrmDistribComponent;
  let fixture: ComponentFixture<FrmDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmDistribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
