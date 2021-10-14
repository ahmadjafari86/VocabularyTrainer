import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-wordtraining',
  templateUrl: './wordtraining.component.html',
  styleUrls: ['./wordtraining.component.css']
})
export class WordtrainingComponent implements OnInit {
  loadedPosts:PostModel[]=[];
  isFetching = false;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData:PostModel){
    this.http.post('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json',
      postData).subscribe(responseData=>{console.log(responseData);
      });
  }
  onFetchPosts(){
     this.fetchPosts();
  }

  onClearPosts(){

  }

  private fetchPosts(){
    this.isFetching = true;
    this.http.get<{[key:string]:PostModel}>('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData=>{
        const postsArray:PostModel[] =[];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key],id:key});
          }
        }
        return postsArray;
      }))
      .subscribe(posts=>{this.loadedPosts=posts;
      this.isFetching = false;
      });
  }


}
