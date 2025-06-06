import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterRolesComponent } from './alter-roles.component';

describe('AlterRolesComponent', () => {
  let component: AlterRolesComponent;
  let fixture: ComponentFixture<AlterRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
