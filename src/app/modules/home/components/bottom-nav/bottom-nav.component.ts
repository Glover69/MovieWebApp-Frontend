import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {

  activeItem: string = 'watchNow'; // Set 'watchNow' as the initially active item

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

}
