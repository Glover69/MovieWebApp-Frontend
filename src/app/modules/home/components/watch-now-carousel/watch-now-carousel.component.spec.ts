import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchNowCarouselComponent } from './watch-now-carousel.component';

describe('WatchNowCarouselComponent', () => {
  let component: WatchNowCarouselComponent;
  let fixture: ComponentFixture<WatchNowCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchNowCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchNowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
