import { isDevMode } from '@angular/core';
import { environment } from 'data-view-angular/core/environments';
import { DvSafeAny } from 'data-view-angular/core/types';

const record: Record<string, boolean> = {};

export const PREFIX = '[DataV-Angular]:';

function notRecorded(...args: DvSafeAny[]): boolean {
  const asRecord = args.reduce((acc, c) => acc + c.toString(), '');

  if (record[asRecord]) {
    return false;
  } else {
    record[asRecord] = true;
    return true;
  }
}

function consoleCommonBehavior(consoleFunc: (...args: DvSafeAny) => void, ...args: DvSafeAny[]): void {
  if (environment.isTestMode || (isDevMode() && notRecorded(...args))) {
    consoleFunc(...args);
  }
}

// Warning should only be printed in dev mode and only once.
export const warn = (...args: DvSafeAny[]) => consoleCommonBehavior((...arg: DvSafeAny[]) => console.warn(PREFIX, ...arg), ...args);

export const warnDeprecation = (...args: DvSafeAny[]) => {
  if (!environment.isTestMode) {
    const stack = new Error().stack;
    return consoleCommonBehavior((...arg: DvSafeAny[]) => console.warn(PREFIX, 'deprecated:', ...arg, stack), ...args);
  } else {
    return () => {};
  }
};

// Log should only be printed in dev mode.
export const log = (...args: DvSafeAny[]) => {
  if (isDevMode()) {
    console.log(PREFIX, ...args);
  }
};
