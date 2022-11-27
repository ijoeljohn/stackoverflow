import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/listitem.models';
import { QuestionsResponse } from '../models/questionsresponse.models';


@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.component.html',
  styleUrls: ['./myquestions.component.css'],
})
export class MyquestionsComponent implements OnInit {
  listQuestions: ListItem[] = [];
  questionResponse: QuestionsResponse;
  isLoggedIn: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .listQuestions('https://forum.mashupstack.com/api/question/my-questions')
      .subscribe((responseData: QuestionsResponse) => {
        this.listQuestions = responseData.data;
        this.questionResponse = responseData;
        console.log(responseData);
      });
  }

  fetchPaginatedResult(page: number) {
    this.dataService
      .listQuestions(
        'https://forum.mashupstack.com/api/question/my-questions?page=' + page
      )
      .subscribe((responseData: QuestionsResponse) => {
        this.listQuestions = responseData.data;
        this.questionResponse = responseData;
      });
  }
}