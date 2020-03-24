import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Questions } from 'src/app/models/questions';
@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.scss']
})
export class QuestionlistComponent implements OnInit {

  questions:Questions[];

  constructor(public data: DataService) {
   
  }

  ngOnInit() {
    this.questions = this.data.getQuestions();
  }

}
