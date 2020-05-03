import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortofolioItem } from './models/portofolioItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  items: PortofolioItem[];

  constructor(private http: HttpClient) { 

    this.items =[];

  }

  getItem(id:number){/*
    const prod: PortofolioItem = this.items.find((p: PortofolioItem) =>{
      return p.id === id;
    })
    return prod;*/
    return this.http.get("https://localhost:3000/items/?id="+id);
  }

  fetchItems(): Observable<any> {
    return this.http.get("http://localhost:3000/items")
  }
}
