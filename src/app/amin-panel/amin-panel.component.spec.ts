import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminPanelComponent } from './amin-panel.component';

describe('AminPanelComponent', () => {
  let component: AminPanelComponent;
  let fixture: ComponentFixture<AminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
