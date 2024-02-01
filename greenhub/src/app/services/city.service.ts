import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {SharedService} from "./shared.service";
import StorageService from "./storage.service";
import {StorageKey} from "../models/enums/storage-key";

@Injectable({
  providedIn: 'root'
})
export class CityService extends StorageService {
  API_URL = this.sharedService.API_URL2;
  private citySubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  city$ = this.citySubject.asObservable();
  canRoute = true;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) {
    super();
  }

  setCity(city: any): void {
    this.citySubject.next(city);
  }

  resetCity(): void {
    this.citySubject.next(null);
  }

//   getChildName(id: number): string {
//     return this.getDataById(StorageKey.city, id) ? this.getDataById(StorageKey.city, id).name : '';
//   }

//   createChild(city: any): Observable<any> {
//     return this.http.post(`${this.API_URL}/children`, {city}, {});
//   }

//   updateChild(city: any): Observable<any> {
//     return this.http.put(`${this.API_URL}/children/${city.id}`, {city}, {});
//   }

  getCity(): Observable<any> {
    return this.http.get(`${this.API_URL}/city`, {});
  }

//   getChildById(id: number): Observable<any> {
//     return this.http.get(`${this.API_URL}/children/${id}`, {});
//   }
//   removeChild(id: number): Observable<any> {
//     return this.http.delete(`${this.API_URL}/children/${id}`, {});
//   }

//   setSubscription(childId: number, children_item: any): Observable<any> {
//     return this.http.post(`${this.API_URL}/children/${childId}/items`, {children_item}, {});
//   }

//   removeSubscription(subscriptionId: number, childId: number): Observable<any> {
//     return this.http.delete(`${this.API_URL}/children/${childId}/items/${subscriptionId}`, {});
//   }
}
