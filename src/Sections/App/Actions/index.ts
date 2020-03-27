import createActionFactory from 'typescript-fsa';

const createAction = createActionFactory('');

export const placeholderAction = createAction<any>("PLACEHOLDER_ACTION");