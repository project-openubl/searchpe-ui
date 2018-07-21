import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { searchConfig } from '../config/search.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = searchConfig.apiKey;

  constructor(private http: HttpClient) { }

  getData(filterText: string): Observable<any> {
    return this.http.get<any[]>(this.url + "/" + filterText)
      .pipe(catchError(this.handleError));
  }

  search(query?: any): Observable<any> {
    return this.http.get(this.url, query).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

  calculateTotal(organizations: any[]) {
    for (const organization of organizations) {
      if (organization && organization.orders) {
        let total = 0;
        for (const order of organization.orders) {
          total += order.itemCost;
        }
        organization.orderTotal = total;
      }
    }
  }
}
