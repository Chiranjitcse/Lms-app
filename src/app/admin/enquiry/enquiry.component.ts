import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {
  enquiries: any = {}; // Holds the fetched enquiry data
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEnquiries();
  }

  fetchEnquiries(): void {
    const apiUrl = 'https://your-api-endpoint.com/enquiries'; // Replace with your API URL
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.enquiries = response;
      },
      (error) => {
        console.error('Error fetching enquiries:', error);
      }
    );
  }
}
