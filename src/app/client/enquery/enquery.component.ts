import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enquery',
  standalone: true,
  imports: [],
  templateUrl: './enquery.component.html',
  styleUrl: './enquery.component.css'
})
export class EnqueryComponent {
  enquiry = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitEnquiry() {
    const apiUrl = 'https://your-api-url.com/enquiry'; // Replace with your actual API URL

    this.http.post(apiUrl, this.enquiry).subscribe(
      (response) => {
        this.successMessage = 'Enquiry submitted successfully!';
        this.errorMessage = '';
        this.enquiry = { name: '', email: '', phone: '', subject: '', description: '' }; // Reset form
      },
      (error) => {
        this.errorMessage = 'Error submitting enquiry. Please try again.';
        this.successMessage = '';
      }
    );
  }
}
