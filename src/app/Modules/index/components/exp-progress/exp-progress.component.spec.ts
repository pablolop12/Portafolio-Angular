import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProgressComponent } from './exp-progress.component';

describe('ExpProgressComponent', () => {
  let component: ExpProgressComponent;
  let fixture: ComponentFixture<ExpProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
