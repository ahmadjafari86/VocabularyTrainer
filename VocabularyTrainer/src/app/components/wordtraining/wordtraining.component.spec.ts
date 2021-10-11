import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtrainingComponent } from './wordtraining.component';

describe('WordtrainingComponent', () => {
  let component: WordtrainingComponent;
  let fixture: ComponentFixture<WordtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordtrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
