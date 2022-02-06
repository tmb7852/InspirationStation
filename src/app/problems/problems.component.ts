import { Component, OnInit } from '@angular/core';
import { idea } from '../idea';
import { IdeaAccessorService } from '../idea-accessor.service';
import { TextFileReaderAndWriterService } from '../text-file-reader-and-writer.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  topics_list:string[] = this.ideaAccessorService.findTopicIdeas();
  dropdown_disp:string = "Topics";
  name_disp = "";
  description_disp = "";
  new_idea_topic:string = "";
  topicSelected?:idea["topic"];
  new_idea_name: string = "";
  new_idea_description = "";
  new_Topic_Selected:boolean = false;
  constructor(
    private ideaAccessorService: IdeaAccessorService,
    private textFileReaderAndWriterService: TextFileReaderAndWriterService
    ) { }

  ngOnInit(): void {
  }
  isSelected(topic:string):void{
    this.new_idea_topic=topic;
    this.dropdown_disp = topic;
    this.new_Topic_Selected = false;
  }
  ideaInIdeasList(name:string):boolean{
    let status:boolean = false;
    for(let x = 0; x < this.ideaAccessorService.getIdeas().length; x++){
      if(this.ideaAccessorService.getIdeas()[x].name == name){
        status = true;
      }
    }
    return status;
  }
  newTopicSelected():void{
    this.new_Topic_Selected = true;
  }

  topicInTopicList():boolean{
    let status:boolean=false;
    for(let x = 0; x < this.ideaAccessorService.findTopicIdeas().length; x++){
      if(this.ideaAccessorService.findTopicIdeas()[x] == ((document.getElementById("topic_box") as HTMLInputElement).value)){
        status = true;
      }
    }
    return status;
  }
  confirmSelected():void{
    this.new_idea_name=((document.getElementById("pname") as HTMLInputElement).value);
    this.new_idea_description=((document.getElementById("description") as HTMLInputElement).value);
      if(this.new_Topic_Selected && !this.topicInTopicList()){
        this.new_idea_topic = ((document.getElementById("topic_box") as HTMLInputElement).value);
      }
      if(this.new_idea_topic != "" && this.new_idea_name != "" && this.new_idea_description != "" && !this.ideaInIdeasList(this.new_idea_name)){
      this.textFileReaderAndWriterService.writeIdea(this.new_idea_topic, this.new_idea_name, this.new_idea_description);
    }   
    this.new_idea_description = "";
    this.new_idea_topic = "";
    this.new_idea_name = "";
    this.dropdown_disp = "Topics";
    this.new_Topic_Selected = false;
    (document.getElementById("pname") as HTMLInputElement).value = "";
    (document.getElementById("description") as HTMLInputElement).value = "";
}
} 
