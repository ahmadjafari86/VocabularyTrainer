import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-wordtraining',
  templateUrl: './wordtraining.component.html',
  styleUrls: ['./wordtraining.component.css']
})
export class WordtrainingComponent implements OnInit {
  loadedPosts=[];
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData:{word:string;englishMeaning:string}){
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
    this.http.get('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData=>{
        const postsArray =[];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            // @ts-ignore
            postsArray.push({...responseData[key],id:key});
          }
        }
        return postsArray;
      }))
      .subscribe(posts=>{console.log(posts);
    });
  }


}
