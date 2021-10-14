import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {PostModel} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-wordtraining',
  templateUrl: './wordtraining.component.html',
  styleUrls: ['./wordtraining.component.css']
})
export class WordtrainingComponent implements OnInit {
  loadedPosts:PostModel[]=[];
  isFetching = false;
  constructor(private http:HttpClient, private postsService:PostsService) { }
  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData:PostModel){
    this.postsService.createAndStorePost(postData);
  }
  onFetchPosts(){
     this.fetchPosts();
  }

private fetchPosts(){
  this.isFetching=true;
  this.postsService.fetchPosts().subscribe(posts=>{
    this.isFetching=false;
    this.loadedPosts=posts;
  });
}
  onClearPosts(){
     this.postsService.deletePosts().subscribe(()=>{
       this.loadedPosts = [];
     });
  }



}
