import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    return this.http.post(`${this.uri}/business`,obj);
  }

  getBusinesses() {
    return this.http.get(`${this.uri}/business`);
  }

  getBusinessById(id) {
    return this.http.get(`${this.uri}/business/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number,id){
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    return this.http.put(`${this.uri}/business/${id}`, obj);
  }

  deleteBusiness(id){
    return this.http.delete(`${this.uri}/business/${id}`);
  }
}
