import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialesComponent } from './iniciales.component';

describe('InicialesComponent', () => {
  let component: InicialesComponent;
  let fixture: ComponentFixture<InicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
