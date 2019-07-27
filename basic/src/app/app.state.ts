import { Tutorial} from "./store/models/models";
export interface AppState {
  readonly tutorial: Tutorial[];
}

/*
We will import this file within the components that we wish to access ngrx.
 */
