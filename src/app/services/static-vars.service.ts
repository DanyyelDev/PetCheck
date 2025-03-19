import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticVarsService {
  private apiUrl = 'your-api-endpoint-here';

  constructor(private http: 
    HttpClient) { }

  getStaticVars(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(this.apiUrl);
  }
}
