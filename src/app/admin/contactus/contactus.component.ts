import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactus: any = {}; // Holds the fetched fetchcontactus data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // this.fetchcontactus();
  }

  // fetchcontactus(): void {
  //   const apiUrl = 'https://your-api-endpoint.com/fetchcontactus'; // Replace with your API URL
  //   this.http.get<any[]>(apiUrl).subscribe(
  //     (response) => {
  //       this.contactus = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching fetchcontactus:', error);
  //     }
  //   );
  // }
}
