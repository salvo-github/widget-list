import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor(private httpClient: HttpClient) {}

  createObservableForlist(endpoint?: string): Observable<any[]> {
    const getHttp = this.httpClient.get(`/assets/${endpoint}`) as Observable<
      any[]
    >;

    // server fetch delay
    const delayedGetHttp = getHttp.pipe(delay(500));

    return delayedGetHttp;
  }
}
