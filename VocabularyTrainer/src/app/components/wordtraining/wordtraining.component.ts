import { Component, OnInit,OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {PostModel} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wordtraining',
  templateUrl: './wordtraining.component.html',
  styleUrls: ['./wordtraining.component.css']
})
export class WordtrainingComponent implements OnInit,OnDestroy {
  loadedPosts:PostModel[]=[];
  isFetching = false;
  error:string = "";
  private errorSubscription!:Subscription;
  constructor(private http:HttpClient, private postsService:PostsService) { }

  ngOnInit(): void {
    this.errorSubscription = this.postsService.errorRxjsSubject
      .subscribe(errorMessage=>{this.error = errorMessage;});
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
      },
      error => {
      this.isFetching = false;
      this.error = error.message;
      });
  }
  onClearPosts(){
    this.postsService.deletePosts().subscribe(()=>{
      this.loadedPosts = [];
    });
  }

  onHandleError(){
    this.error = "";
  }
  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }


}
