import { Injectable } from '@angular/core';
import { idea } from './idea';
import { IdeaAccessorService } from './idea-accessor.service';
import { sample_idea_list } from './sample-ideas';
@Injectable({
  providedIn: 'root'
})

export class TextFileReaderAndWriterService {
  writeIdea(new_idea_topic: string, new_idea_name: string, new_idea_description: string) {
    sample_idea_list.push(
      {
        topic:new_idea_topic,
        name:new_idea_name,
        description:new_idea_description
      }
    )
  }
  constructor() { }
}
