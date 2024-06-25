import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonSkillsComponent } from './polygon-skills.component';

describe('PolygonSkillsComponent', () => {
  let component: PolygonSkillsComponent;
  let fixture: ComponentFixture<PolygonSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolygonSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolygonSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
