import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClient) { }

  createAndStorePost(postData:PostModel){
    this.http.post('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json',
      postData).subscribe(responseData=>{console.log(responseData);
    });
  }
  fetchPosts(){
   return this.http.get<{[key:string]:PostModel}>('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData=>{
        const postsArray:PostModel[] =[];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key],id:key});
          }
        }
        return postsArray;
      }));
  }

  deletePosts(){
    return this.http.delete('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json');
  }
}
