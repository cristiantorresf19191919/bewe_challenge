import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};
const server = 'https://autocomplete.clearbit.com/v1/companies/suggest';

export async function getLogoUrl(word) {
  // const res = await axios.get(server+"?query="+word)
  console.log(`${server}?query=${word}`)
  try{
    const res = await axios.get(`${server}?query=${word}`,config);
    
    return res.data[0]["logo"];

  }catch(error){
    console.log("error desadfortunado");
    console.log(error);
  }
 
}
