import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/listitem.models';
import { QuestionsResponse } from '../models/questionsresponse.models';


@Component({
  selector: 'app-myanswers',
  templateUrl: './myanswers.component.html',
  styleUrls: ['./myanswers.component.css'],
})
export class MyanswersComponent implements OnInit {
  listQuestions: ListItem[] = [];
  isLoggedIn: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .listQuestions(
        'https://forum.mashupstack.com/api/question/answered-by-me'
      )
      .subscribe((responseData: QuestionsResponse) => {
        this.listQuestions = responseData.data;
      });
  }
}