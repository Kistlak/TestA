import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  SaveData(data) {
    return this.http.post(`${this.baseUrl}/Issue`, data)
}


}
