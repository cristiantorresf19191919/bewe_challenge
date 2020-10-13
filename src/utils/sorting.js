export const sortAlphabetical = state => {
  const ordered = state.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else {
      if (nameA > nameB) {
        return 1;
      }
    }
    return 0;
  });

  return ordered;
};

export const sortParabolic = state => {
  //dividir el arreglo en 2 y ordernar el primero
  // de mayor a menor y el segundo de menor a mayor
  
  let middle = Math.floor((state.length / 2))+1
    // slice tiene sideeffects
  const firstArray = state.slice(0,middle);
  const secondArray = state.slice(middle,state.length);
  const smallToLongCharacters = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA.length < nameB.length) {
      return -1;
    }
    return 0;
  };
  const longToSmallCharacters = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA.length < nameB.length) {
      return 1;
    }
    return 0;
  };
  const firstArrayOrdered = firstArray.sort(smallToLongCharacters);
  const secondArrayOrdered = secondArray.sort(longToSmallCharacters);
  let parabolicSorted = firstArrayOrdered.concat(secondArrayOrdered);
  return parabolicSorted;
};
