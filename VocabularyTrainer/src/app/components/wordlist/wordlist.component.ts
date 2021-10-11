import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {
  languages =[
    {id:1, name:'English'},
    {id:2, name:'German'},
    {id:3, name:'Farsi'}
  ];
  databaseList=[
    {id:1, name:'Elementary'},
    {id:2, name:'Intermediate'},
    {id:3, name:'Advanced'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
