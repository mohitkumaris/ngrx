/*
A reducer is what takes the incoming action and decides what to do with it.
It takes the previous state and returns a new state based on the given action.
 */
import {Action} from "@ngrx/store";
import { Tutorial} from "../models/models";
import * as TutorialActions from "../actions/tutorial.action";

const initialState : Tutorial ={
  name:'intial',
  url:'www.google.com'
};

export function reducer(state: Tutorial[] = [initialState],action: TutorialActions.Actions) {
 switch (action.type) {
   case TutorialActions.ADD_TUTORIAL:
     return [...state,action.payload];
   default:
     return state;

 }
}

