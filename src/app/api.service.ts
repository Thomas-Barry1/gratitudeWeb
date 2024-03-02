import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affirmation } from './affirmation';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // apiUrl = 'https://www.affirmations.dev/';
  apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getList(): Observable<Affirmation> {
    return this.http.get<Affirmation>(`${this.apiUrl}`);
  }

  //FOR FUTURE

  // getPostById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  // }

  // addPost(post: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/posts`, post);
  // }

  // updatePost(id: number, post: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  // }

  // deletePost(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  // }
}