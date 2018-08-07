import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SEARCHPE_API_URL } from '../api/searchpe-api';
import { Company } from '../models/company';

@Injectable()
export class CompanyService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private companiesUrl: string;

  constructor(
    private http: HttpClient,
    @Inject(SEARCHPE_API_URL) apiUrl: string) {
    this.companiesUrl = apiUrl.endsWith('/') ? apiUrl + 'companies' : apiUrl + '/companies';
  }

  getCompanyById(companyId: string): Observable<Company> {
    const url = `${this.companiesUrl}/${companyId}`;
    return this.http.get(url, { headers: this.headers })
      .pipe(
        map((response) => {
          return response['data'] as Company;
        }),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  getCompanyByRuc(ruc: string): Observable<Company[]> {
    const url = this.companiesUrl;
    let params: HttpParams = new HttpParams();
    params = params.set('ruc', ruc);

    return this.http.get(url, { params: params, headers: this.headers })
      .pipe(
        map((response) => {
          return response as Company[];
        }),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  search(filterText: string, first: number = 0, limit: number = 10): Observable<Company[]> {
    const url = this.companiesUrl;
    let params: HttpParams = new HttpParams();
    params = params.set('filterText', filterText);
    params = params.set('first', first.toString());
    params = params.set('limit', limit.toString());

    return this.http.get(url, { params: params, headers: this.headers })
      .pipe(
        map(response => {
          return response as Company[];
        }),
        catchError((error) => {
          return this.handleError(error);
        })
      );

  }

  /**
   * Private
   */

  private handleError(error: any) {
    return throwError(error.message || error);
  }

}
