import { Injectable } from '@angular/core';
import { sample_idea_list } from './sample-ideas';
import { idea } from './idea';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaAccessorService {

  is_topic_selected:boolean = false;
  topicSelected?:idea["topic"];
  ideas_list = sample_idea_list;

  getIdeas(): idea[]{
    return sample_idea_list;
  }

  findIdeasFromTopic(topic:string):idea[]{
    let ideas_list_from_topic:idea[] = [];
    for(let x = 0; x < this.ideas_list.length; x++){
      if(this.ideas_list[x].topic == topic && !ideas_list_from_topic.includes(this.ideas_list[x])){
          ideas_list_from_topic.push(this.ideas_list[x]);
      }
    }
    return(ideas_list_from_topic);
  }

  findTopicIdeas():string[]{
    let topics:string[] = [];
    for(let x = 0; x < this.ideas_list.length; x++){
      if (!topics.includes(this.ideas_list[x].topic)){
        topics.push(this.ideas_list[x].topic);
      }
    }
    this.is_topic_selected = true;
    return(topics);
  }
  
  constructor() { }
}
