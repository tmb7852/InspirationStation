import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  constructor() { }
  problemsClicked:boolean = false;
  ideasClicked:boolean = false;
  ngOnInit(): void {
  }

  onIdeasSelect():void{
    this.ideasClicked = true;
    this.problemsClicked = false;
  }

  onProblemsSelect():void{
    this.ideasClicked = false;
    this.problemsClicked = true;
  }
}
