import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:3000/api/v1';
  complaints: Complaint[] | undefined;

  getComplaint() {
    return this.http.get<Complaint[]>(`${this.URL}/complaint`);
  }

  postComplaint(data: any) {
    return this.http.post<any>(`${this.URL}/complaint`, data);
  }
}
