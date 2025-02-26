import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component'; // Import HomeComponent
import { LoginComponent } from './admin/login/login.component'; // Import Login
import { EnquiryComponent } from './admin/enquiry/enquiry.component'; // Import Admin Components
import { ContactusComponent } from './admin/contactus/contactus.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AdmissionComponent } from './admin/admission/admission.component';
import { MenuComponent } from './admin/menu/menu.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route to home
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/enquiry', component: EnquiryComponent },
  { path: 'admin/contactus', component: ContactusComponent },
  { path: 'admin/gallery', component: GalleryComponent },
  { path: 'admin/customer', component: CustomerComponent },
  { path: 'admin/admission', component: AdmissionComponent },
  { path: 'admin/menu', component: MenuComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect invalid routes to Home
];
