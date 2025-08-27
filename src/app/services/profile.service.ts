import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://10.11.12.124:8090/ProfileMS/profile';

  constructor(private http: HttpClient) { }

  // Profile details
  getProfile(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/employeeDetails?empId=${empId}`);
  }

  // Address Information
  getAddress(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getEmployeeAddress?empId=${empId}`);
  }

  // Emergency Contact
  getEmergencyContact(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getEmergencyContacts?empId=${empId}`);
  }

  // Education
  getEducation(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getEmployeeQualifications?empId=${empId}`);
  }

  // Family Details
  getFamilyDetails(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getEmployeeFamilyDetails?empId=${empId}`);
  }

  // ESI / Mediclaim
  getEsiDetails(empId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getEmployeeMediclaim?empId=${empId}`);
  }
  
}
