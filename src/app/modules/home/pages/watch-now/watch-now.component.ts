import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-watch-now',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './watch-now.component.html',
  styleUrl: './watch-now.component.scss',

})
export class WatchNowComponent implements  OnInit {
  constructor(private el: ElementRef) {
    
  }

  ngOnInit(): void {
    
  }

}
