import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css',
})
export class FormPostComponent {
  constructor(private http: HttpClient) {}

  postRequest(postData: { name: string; age: 100 }) {
    const apiUrl = '/api/product';

    // Set the headers for the request
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Make the POST request
    this.http.post(apiUrl, postData, { headers }).subscribe(
      (response) => {
        console.log('Post request successful:', response);
      },
      (error) => {
        console.error('Error making post request:', error);
      }
    );
  }
}
