import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionModel } from './section-model';

describe('SectionModel', () => {
  let component: SectionModel;
  let fixture: ComponentFixture<SectionModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionModel],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
