const isWordTooShortFunc = word => {
    let wordsArray = word.split(' ');
    wordsArray.forEach(word => {
      if (word.length < 3) {
        console.log(`la palabra ${word} es inferior a 3`);
        return true;
      } else {
        return false;
      }
    });
  };
  
  export const validateInput = word => {
    // to do later
  
    // despues exportar todo esto ordenado en funcion aparte
    let regex = /^([^0-9]*)$/;
    // words to array
  
    let isWordTooShort = isWordTooShortFunc(word);
  
    if (word.length < 3 ||  !word.length > 40) {
      // 3 a 40 caracteres
      console.log('3 a 40 no pass debuggin only');
      return false;
    } else if (!regex.test(word)) {
      // ningun digito numerico
      console.log('no digit debuggin only');
      return false;
    } else if (isWordTooShort) {
      console.log('word too short debuggin only');
      return false;
    } else {
      return true;
    }
  };
  