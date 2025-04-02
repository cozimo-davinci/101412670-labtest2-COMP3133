import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Launch } from './launch.interface';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private launchesSubject = new BehaviorSubject<Launch[]>([]);
  public launches$ = this.launchesSubject.asObservable();


  constructor(private http: HttpClient) {
    this.fetchLaunches();
  }

  fetchLaunches(year?: string) {
    let url = 'https://api.spacexdata.com/v3/launches';
    if (year) {
      url += `?launch_year=${year}`;
    }
    this.http.get<Launch[]>(url).subscribe(data => {
      this.launchesSubject.next(data);
    })
  }

  // get a single mission by its flight number
  getMission(flight_number: string): Observable<Launch> {
    const url = `https://api.spacexdata.com/v3/launches/${flight_number}`
    return this.http.get<Launch>(url);
  }
}
