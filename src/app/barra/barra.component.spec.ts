import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraComponent } from './barra.component';

describe('BarraComponent', () => {
  let fixture: ComponentFixture<BarraComponent>;
  let component: BarraComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
