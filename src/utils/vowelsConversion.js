export function vowelsToNumbers (state){
    const newState = state.map(el => {
        let replaced = el.name.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0');
        return { ...el, name: replaced };
      });
      debugger;
      const total  = countNumbers(newState);

      newState.total = total;
      return newState;

}

export function numberToVowels(state){
    return state.map(el => {
        let replaced = el.name.replace(/4/gi, 'a').replace(/3/gi, 'e').replace(/1/gi, 'i').replace(/0/gi, 'o');
        return { ...el, name: replaced };
      });

}

export function countNumbers(state){
    const texts = state.map(el => el.name);
    let arrayOfNumbers = [];
    texts.forEach(text => {
        for (let i=0 ; i < text.length; i++){
            if (/\d/.test(text[i])){
                arrayOfNumbers.push(Number(text[i]))
            }
        }                
    });
    const total = arrayOfNumbers.reduce((prev,curr)=>{
        return prev + curr;
    } ,0)

    return total;
    
}