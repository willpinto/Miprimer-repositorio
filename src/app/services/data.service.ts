import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(posts =>{
      // console.log(posts)
    })
    );
  }
}
