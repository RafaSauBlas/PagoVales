import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrmPagoValeComponent } from './frm-pago-vale.component';

describe('FrmPagoValeComponent', () => {
  let fixture: ComponentFixture<FrmPagoValeComponent>;
  let component: FrmPagoValeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmPagoValeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmPagoValeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
