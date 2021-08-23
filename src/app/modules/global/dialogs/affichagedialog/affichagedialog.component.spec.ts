import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagedialogComponent } from './affichagedialog.component';

describe('AffichagedialogComponent', () => {
  let component: AffichagedialogComponent;
  let fixture: ComponentFixture<AffichagedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichagedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
