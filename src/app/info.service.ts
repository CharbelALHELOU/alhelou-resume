import { Injectable } from '@angular/core';
import { PortofolioItem } from './models/portofolio-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
    constructor(private http: HttpClient) {

  }

  getPortfolioItem(id:number){
    return this.http.get('http://localhost:3000/portfolio/?id='+id);
  }

  fetchPortfolioItems(): Observable<any> {
    return this.http.get('http://localhost:3000/portfolio')
  }

  fetchExperienceItems(): Observable<any> {
    return this.http.get("http://localhost:3000/experiences")
  }

  fetchEduItems(): Observable<any> {
    return this.http.get("http://localhost:3000/education")
  }
}

