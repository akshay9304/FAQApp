import { Injectable } from '@angular/core';
import { Questions } from "../models/questions";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions:Questions[];
  constructor() {
    this.questions = [{
      text: 'what is your name?',
      answer: 'My name is Akshay',
      hide:true
    },
    {
      text: 'what is your favourite color?',
      answer: 'My name is Green',
      hide:true
    },
    {
      text: 'what is your language?',
      answer: 'My name is Javascript',
      hide:true
    },
    {
      text: 'what is your Editor?',
      answer: 'My name is VS code',
      hide:true
    }]
   }

   getQuestions() {
     return this.questions;
   }
}
 