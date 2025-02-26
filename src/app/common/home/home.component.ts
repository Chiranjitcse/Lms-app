import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../admin/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path]); // ✅ Navigate to the given path
  }
}
