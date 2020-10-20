import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrdersChartComponent } from './total-orders-chart.component';

describe('TotalOrdersChartComponent', () => {
  let component: TotalOrdersChartComponent;
  let fixture: ComponentFixture<TotalOrdersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalOrdersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalOrdersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
