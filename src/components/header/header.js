import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onCreate } from '../../store/actions/todo';

import {getLogoUrl} from '../../services/todosService';

import { validateInput } from '../../utils/validateInput';
import {wordToQuery} from '../../utils/checkPesosSign';

const ENTER_KEY = 'Enter';

export function Header() {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [testing, setTesting] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    console.log('handle change');
    console.log(event);
    setName(event.target.value);
  };

  const handleSubmit = event => {
    if (event.key !== ENTER_KEY) {
      return;
    }
    // solo ocurre con la tecla enter
    const isValid = validateInput(name);
    // onCreate(name);
    if (!isValid) {
      return;
    }
    // check $ symbol
    let word = wordToQuery(name);   
    setTesting(word);
    if (word) {
      getLogoUrl(word).then(res => {
        setLogo(res);        
        let noPesosSignName = name.substring(1, name.length);
        dispatch(onCreate({ name: noPesosSignName, logo:res }));
        setLogo('');
        setName('');
      });
    } else {
      dispatch(onCreate({ name, logo }));
      setName('');
      setLogo('');
      return;
    }

    setName('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <h4>testing {testing}</h4>
      <p>logo = {logo} </p>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onInput={handleChange}
        onKeyUp={handleSubmit}
        onChange={() => {}}
        data-testid="todo-create"
      />
      {/* testing */}
    </header>
  );
}
