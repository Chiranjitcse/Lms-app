import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LoginComponent } from './admin/login/login.component';
import { EnquiryComponent } from './admin/enquiry/enquiry.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AdmissionComponent } from './admin/admission/admission.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './common/home/home.component';
import { MenuComponent } from './admin/menu/menu.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', redirectTo: '/common/home', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent },
  { path: 'common/home', component: HomeComponent },
  { path: 'admin/enquiry', component: EnquiryComponent },
  { path: 'admin/contactus', component: ContactusComponent },
  { path: 'admin/gallery', component: GalleryComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/admission', component: AdmissionComponent },
  { path: 'admin/menu', component: MenuComponent },
  { path: '**', redirectTo: '/common/home' }, // Redirect unknown routes to login
  // , canActivate: [AuthGuard]
  
];

export const appConfig = {
  providers: [provideRouter(routes), importProvidersFrom(),  provideHttpClient(), importProvidersFrom(FormsModule) ]

};
