import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-wordtraining',
  templateUrl: './wordtraining.component.html',
  styleUrls: ['./wordtraining.component.css']
})
export class WordtrainingComponent implements OnInit {
  word = "";
  englishMeaning = "";
  constructor(private http:HttpClient) { }

  onCreatePost(postData:{word:string;englishMeaning:string}){
    this.http.post('https://vocabulary-trainer-2021-default-rtdb.firebaseio.com/posts.json',
      postData).subscribe(responseData=>{console.log(responseData);
      });
  }

  ngOnInit(): void {
  }

}
