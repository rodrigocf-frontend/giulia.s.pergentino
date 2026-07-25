import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPresentation } from './section-presentation';

describe('SectionPresentation', () => {
  let component: SectionPresentation;
  let fixture: ComponentFixture<SectionPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
