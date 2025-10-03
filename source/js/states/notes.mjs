import { BehaviorSubject } from 'https://esm.sh/rxjs@7.8.1';

/**
 * @type {BehaviorSubject<{text: string}[]>}
 */
export const notesState = new BehaviorSubject([]);
