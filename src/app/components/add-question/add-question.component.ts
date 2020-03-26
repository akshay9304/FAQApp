import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Questions } from "../../models/questions";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  @Output()  questionAdded = new EventEmitter<Questions>();
  text:string ='';
  answer:string = '';
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({text:this.text, answer:this.answer,hide:true})
  }

}
