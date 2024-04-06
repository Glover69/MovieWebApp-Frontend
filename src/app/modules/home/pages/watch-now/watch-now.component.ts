import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchNowCarouselComponent } from '../../components/watch-now-carousel/watch-now-carousel.component';

@Component({
  selector: 'app-watch-now',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WatchNowCarouselComponent],
  templateUrl: './watch-now.component.html',
  styleUrl: './watch-now.component.scss',

})
export class WatchNowComponent implements  OnInit {
  constructor(private el: ElementRef) {
    
  }

  ngOnInit(): void {
    
  }

}
