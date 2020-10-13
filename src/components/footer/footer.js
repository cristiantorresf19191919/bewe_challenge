import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { FILTERS } from '../../constants/filter';
import { selectCompleted, selectNotCompleted } from '../../store/selectors/todo';
import { onClearCompleted, onNerdStyle, onNormalStyle, onSortAlphabetical, onSortParabolical } from '../../store/actions/todo';
import { onFilterSelect } from '../../store/actions/filter';

function ItemStatusFooter() {
  const filterTitles = [
    { key: FILTERS.all, value: 'All' },
    { key: FILTERS.active, value: 'Active' },
    { key: FILTERS.completed, value: 'Completed' }
  ];
  const dispatch = useDispatch();
  const completedCount = useSelector(state => selectCompleted(state.todos).length);
  const itemsLeft = useSelector(state => selectNotCompleted(state.todos).length);
  const filter = useSelector(state => state.filter);
 
  const clearCompleted = () => dispatch(onClearCompleted());
  const filterSelect = selectedFilter => dispatch(onFilterSelect(selectedFilter));

  const itemText = itemsLeft === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        <span> {itemText} left</span>
      </span>
      <ul className="filters">
        {filterTitles.map(filterTitle => (
          <li key={filterTitle.key}>
            <a
              href="./#"
              className={classNames({ selected: filterTitle.key === filter })}
              onClick={() => filterSelect(filterTitle.key)}
            >
              {filterTitle.value}
            </a>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

function SortFooter() {
  const dispatch = useDispatch();
  const onClickSortAlphabetical = (e) => {
    e.preventDefault();
    dispatch(onSortAlphabetical())
  }
  const onClickSortParabolical = (e) => {
    e.preventDefault();
    dispatch(onSortParabolical())
  }

  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a onClick={(e) => onClickSortAlphabetical(e)} href="./#">Sort alphabetical</a>
        </li>
        <li>
          <a onClick={(e) => onClickSortParabolical(e)} href="./#">Sort parabolical</a>
        </li>
      </ul>
    </footer>
  );
}

function MapFooter() {
  const dispatch = useDispatch();
  const totalNerdLettersNumber = useSelector(state => state.todos.total);
  
  const clickNerdStyle = e => {
    e.preventDefault();
    dispatch(onNerdStyle());
  };
  const onClickNormalStyle = (e, onNerdStyle) => {
    e.preventDefault();
    dispatch(onNormalStyle());
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        
       
          <strong>{totalNerdLettersNumber}</strong>

       
        
        <span> sum</span>
      </span>
      <ul className="filters">
        <li>
          <a onClick={e => onClickNormalStyle(e)} href="/">
            Normal
          </a>
        </li>
        <li>
          <a onClick={e => clickNerdStyle(e)} href="/">
            Nerd Style
          </a>
        </li>
      </ul>
    </footer>
  );
}

export function Footer() {
  return (
    <div>
      <ItemStatusFooter />
      <SortFooter />
      <MapFooter />
    </div>
  );
}
