import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

export const guards: any[] = [AuthGuard, UnauthGuard];

export * from './auth.guard';
export * from './unauth.guard';
