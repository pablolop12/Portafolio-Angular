import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitprevComponent } from './gitprev.component';

describe('GitprevComponent', () => {
  let component: GitprevComponent;
  let fixture: ComponentFixture<GitprevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitprevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitprevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
