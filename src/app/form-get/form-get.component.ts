import { Component } from '@angular/core';
import { People } from '../model/people';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-form-get',
  templateUrl: './form-get.component.html',
  styleUrl: './form-get.component.css',
})
export class FormGetComponent {
  filteredProducts: People[] = [
    {
      name: 'sense',
      age: 23,
    },
  ];
  getValue() {}
  peoples: People[] = [];
  constructor(private http: HttpClient) {
    this.http.get<People[]>(`/api/people`).subscribe((response) => {
      this.peoples = response;
      this.filteredProducts = this.peoples;
    });
  }
}
