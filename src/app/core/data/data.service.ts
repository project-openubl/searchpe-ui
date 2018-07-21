import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
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

  search(filterText?: string): Observable<any> {
    const params = new HttpParams().set('ruc', filterText);
    return this.http.get(this.url, { params }).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);     
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
