import { Component, OnInit } from '@angular/core';
import { IdeaAccessorService } from '../idea-accessor.service';
import { idea } from '../idea';
import { Observable, of } from 'rxjs';
import { sample_idea_list } from '../sample-ideas';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})

export class IdeasComponent implements OnInit {

  ideaDescription:string = "";
  ideas_list = sample_idea_list;
  ideaSelected?:idea;
  topicSelected?:idea["topic"];
  is_topic_selected:boolean = false;
  idea_from_topics: idea[] = [];

  ideaTopics:string[] = this.ideaAccessorService.findTopicIdeas();
  constructor(private ideaAccessorService: IdeaAccessorService) { }

  ngOnInit(): void {
    this.updateIdeasList();
  }
  onSelect(Idea: idea): void{
    this.ideaSelected = Idea;
    this.ideaDescription = this.ideaSelected.description;
  }

  updateIdeasList():void{
    this.ideas_list = sample_idea_list;
  }
  onTopicSelect(Topic:string): void{
    this.topicSelected = Topic;
    this.idea_from_topics = this.ideaAccessorService.findIdeasFromTopic(this.topicSelected);
    this.is_topic_selected = true;
    this.ideaDescription = "";
  }

}
