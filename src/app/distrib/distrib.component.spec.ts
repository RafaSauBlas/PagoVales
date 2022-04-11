import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistribComponent } from './distrib.component';

describe('DistribComponent', () => {
  let fixture: ComponentFixture<DistribComponent>;
  let component: DistribComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});