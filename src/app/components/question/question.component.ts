import { Component, OnInit, Input } from '@angular/core';
import { Questions } from "../../models/questions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
@Input('questions') questions:Questions; 

  constructor() { }

  ngOnInit() {
    console.log('Question List',this.questions)
  }

}
