import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CustomerComponent } from './customer/customer.component';
import { AdmissionComponent } from './admission/admission.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../common/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
