import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable} from "rxjs";
import { Tutorial} from "../store/models/models";
import { AppState} from "../app.state";
import * as TutorialActions from '../store/actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<AppState>) {}

  addTutorial(name,url){
     this.store.dispatch(new TutorialActions.AddTutorial({name:name,url:url}));
  }
  ngOnInit() {
  }

}
