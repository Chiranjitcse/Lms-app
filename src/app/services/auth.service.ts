import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin@123') {
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) { // ✅ Ensures it's running in the browser
      return !!localStorage.getItem('userToken');
    }
    return false;
  }
  

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }
}
