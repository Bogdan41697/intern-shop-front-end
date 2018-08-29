import { createSelector } from '@ngrx/store';
import { getAuthFeatureState, State } from '../reducers';

export const getAuthState: any = createSelector(
  getAuthFeatureState,
  (state: State) => state
);

export const getAuthenticatedUser: any = createSelector(getAuthState, (state: State) => state.users.currentUser);
export const getIsAuthenticated: any = createSelector(getAuthState, (state: State) => state.users.isAuthorized);
export const getIsAuthenticatedLoaded: any = createSelector(getAuthState, (state: State) => state.users.loaded);
export const getIsAuthenticationLoading: any = createSelector(getAuthState, (state: State) => state.users.loading);
export const getAuthenticationError: any = createSelector(getAuthState, (state: State) => state.users.error);
