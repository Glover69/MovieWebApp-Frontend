import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';

// gsap.registerPlugin()

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override = <any>{
    'swipe': { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}

@Component({
  selector: 'app-watch-now',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './watch-now.component.html',
  styleUrl: './watch-now.component.scss',
  animations: [
    // Define a simple fade in/out animation
    // You can customize the animation based on your needs
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
})
export class WatchNowComponent implements AfterViewInit {
  constructor(private el: ElementRef) {
    
  }

  items = [
    {  title: '/assets/images/the-notebook-font.png', imageUrl: '/assets/images/image1.jpg' },
    {  title: '/assets/images/the-notebook-font.png', imageUrl: '/assets/images/image2.jpg' },
    {  title: '/assets/images/the-notebook-font.png', imageUrl: '/assets/images/image3.jpg' },
    {  title: '/assets/images/the-notebook-font.png', imageUrl: '/assets/images/image4.jpg' },
    {  title: '/assets/images/the-notebook-font.png', imageUrl: '/assets/images/image5.jpg' },

  ];

  

  currentItem = 0;

  @ViewChild('carousel') carousel!: ElementRef;


  ngAfterViewInit() {
    const hammer = new Hammer(this.carousel.nativeElement);

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    
    hammer.on('swipe', (event: HammerInput) => {
      if (event.direction === Hammer.DIRECTION_LEFT) {
        this.changeItem();
      } else if (event.direction === Hammer.DIRECTION_RIGHT) {
        this.changeItem();
      }
    });

    setInterval(() => {
      this.changeItem();
    }, 5000);
  }
  changeItem() {
    this.currentItem = (this.currentItem + 1) % this.items.length;

    // const nextItem = (this.currentItem + 1) % this.items.length;
    // const element = this.el.nativeElement.querySelector('.carousel');

    // gsap.to(this.carousel.nativeElement, {
    //   opacity: 0,
    //   duration: 0.5,
    //   onComplete: () => {
    //     this.currentItem = nextItem;
    //     gsap.to(this.carousel.nativeElement, { opacity: 1 });
    //   },
    // });
  }

  goToItem(index: number) {
    if (index !== this.currentItem) {
      gsap.to(this.carousel.nativeElement, { opacity: 0, duration: 0.5, onComplete: () => {
        this.currentItem = index;
        gsap.to(this.carousel.nativeElement, { opacity: 1, duration: 0.5 });
      }});
    }
  }
}
