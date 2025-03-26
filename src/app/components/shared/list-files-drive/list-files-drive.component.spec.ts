import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilesDriveComponent } from './list-files-drive.component';

describe('ListFilesDriveComponent', () => {
  let component: ListFilesDriveComponent;
  let fixture: ComponentFixture<ListFilesDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilesDriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilesDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
