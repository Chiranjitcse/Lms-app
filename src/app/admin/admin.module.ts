import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CustomerComponent } from './customer/customer.component';
import { AdmissionComponent } from './admission/admission.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from '../common/home/home.component';

@NgModule({
  declarations: [
    EnquiryComponent,
    ContactusComponent,
    GalleryComponent,
    CustomerComponent,
    AdmissionComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
