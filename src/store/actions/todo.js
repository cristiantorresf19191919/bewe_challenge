import { ACTION_TYPES } from '../../constants/action-type';
// dispatch(onCreate(name));
export const onLoad = todos => ({ type: ACTION_TYPES.load, todos });
export const onCreate = ({ name, logo }) => {
  return {
    type: ACTION_TYPES.create,
    payload: { name, logo }
  };
};
export const onNerdStyle = () => ({type: ACTION_TYPES.nerdStyle});
export const onNormalStyle = () => ({type: ACTION_TYPES.normalStyle});
export const onSortAlphabetical = () => ({type:ACTION_TYPES.sortAlphabetical})
export const onSortParabolical = () => ({type:ACTION_TYPES.sortParabolical})
export const onRemove = id => ({ type: ACTION_TYPES.remove, id });
export const onUpdate = values => ({ type: ACTION_TYPES.update, values });
export const onCompleteAll = () => ({ type: ACTION_TYPES.completeAll });
export const onClearCompleted = () => ({ type: ACTION_TYPES.clearCompleted });
