function checkPesosSign(name) {
  let test = name.match(/\$/g);
  if (test !== null) {
    if (test.length > 0) {
      //contains $
      return true;
      //get the word using regex capturing group
      // let regex = /^\$([\w]+)\s/
    }
  } else {
    // no $ symbol
    return false;
  }
}

export function wordToQuery(name) {
  // check if contains $ symbol
  if (checkPesosSign(name)) {
    let wordToFind = name.match(/^\$([\w]+)/)[1];
    return wordToFind;
  } else {
    return false;
  }
}
