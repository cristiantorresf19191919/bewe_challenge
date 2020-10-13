import { v4 as uuidv4 } from 'uuid';
import { ACTION_TYPES } from '../../constants/action-type';
import { sortAlphabetical, sortParabolic } from '../../utils/sorting';
import { numberToVowels, vowelsToNumbers,countNumbers } from '../../utils/vowelsConversion';
import { selectCompleted, selectNotCompleted } from '../selectors/todo';

const areAllCompleted = state => state.length && selectCompleted(state).length === state.length;

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.load:
      return [...action.todos];
    case ACTION_TYPES.create:
    
      return [...state, { id: uuidv4(), name: action.payload.name, logo: action.payload.logo, completed: false }];
    case ACTION_TYPES.update:
      return state.map(todo => (todo.id === action.values.id ? { ...todo, ...action.values } : todo));
    
      case ACTION_TYPES.remove:
      
      const filtered = state.filter(todo => todo.id !== action.id);
      
      filtered.total = countNumbers(filtered);
      return filtered;
    
      case ACTION_TYPES.completeAll:
      return state.map(todo => ({ ...todo, ...{ completed: !areAllCompleted(state) } }));
    case ACTION_TYPES.clearCompleted:
      return selectNotCompleted(state);
    case ACTION_TYPES.nerdStyle:
      return vowelsToNumbers(state);
    case ACTION_TYPES.normalStyle:
      return numberToVowels(state);
    case ACTION_TYPES.sortAlphabetical:
      return sortAlphabetical(state);
    case ACTION_TYPES.sortParabolical:
      return sortParabolic(state);
    default:
      return state;
  }
};
