import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    const params = {
      action: 'query',
      list: 'search',
      srsearch: term,
      format: 'json'
    };

    return this.http.get(this.apiUrl, { params });
  }
}
