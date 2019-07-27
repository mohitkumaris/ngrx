import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable} from "rxjs";
import { Tutorial} from "../store/models/models";
import { AppState} from "../app.state";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  public tutorials: Observable<Tutorial[]>;
  constructor(private store:Store<AppState>) {
    this.tutorials = store.select('tutorial');
    /*
    We're accessing the store from ngrx within the constructor,
     and then selecting tutorial which is defined as a the property
     from app.module.ts in StoreModule.forRoot({}).
    This calls the tutorial reducer and returns the tutorial state.
     */
  }

  ngOnInit() {
  }

}
