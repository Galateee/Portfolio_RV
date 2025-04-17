import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNavComponent } from './intro-nav.component';

describe('IntroNavComponent', () => {
  let component: IntroNavComponent;
  let fixture: ComponentFixture<IntroNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
