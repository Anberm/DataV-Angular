import { DvSafeAny } from './any';

export type FunctionProp<T> = (...args: DvSafeAny[]) => T;
