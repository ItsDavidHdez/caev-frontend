import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:3000/api/v1';

  getComplaint() {
    return this.http.get<any>(`${this.URL}/complaint`);
  }
}
