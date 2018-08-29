import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as users from './auth.reducers';

export interface State {
  users: users.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  users: users.reducer
};

export const getAuthFeatureState: any = createFeatureSelector<State>('auth');
