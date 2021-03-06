import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map,catchError} from "rxjs/internal/operators";
import {Subject,throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  errorRxjsSubject = new Subject<string>();
  private firebaseUrl = 'https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json';
  constructor( private http:HttpClient) { }

  createAndStorePost(postData:PostModel){
    this.http.post(this.firebaseUrl, postData).subscribe(
      responseData=>{console.log(responseData);},
      error =>{this.errorRxjsSubject.next(error.message);}
    );
  }
  fetchPosts(){
    let searchParams = new  HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');
    return this.http
      .get<{[key:string]:PostModel}>(this.firebaseUrl,{
        headers: new HttpHeaders({'Custom-header':'Hello'}),
        params: searchParams
      })
      .pipe(map(responseData=> {
          const postsArray:PostModel[] =[];
          for (const key in responseData)
          {
            if (responseData.hasOwnProperty(key)){
              postsArray.push({...responseData[key],id:key});
            }
          }
          return postsArray;}),
        catchError(errorRes =>{return throwError(errorRes);})
      );
  }

  deletePosts(){
    return this.http.delete(this.firebaseUrl);
  }
}
