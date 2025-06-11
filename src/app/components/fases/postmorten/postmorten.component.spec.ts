import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmortenComponent } from './postmorten.component';

describe('PostmortenComponent', () => {
  let component: PostmortenComponent;
  let fixture: ComponentFixture<PostmortenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostmortenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostmortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
