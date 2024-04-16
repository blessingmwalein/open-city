import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiLayoutsComponent } from './ui-layouts.component';

describe('UiLayoutsComponent', () => {
  let component: UiLayoutsComponent;
  let fixture: ComponentFixture<UiLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLayoutsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
