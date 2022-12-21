let  urls = [];

urls.push ('https://pokeapi.co/api/v2/pokemon')

console.log(urls)

async function makeRequest() {
  try {
     const response = await fetch(urls);
    
    console.log('conecction succesfull. status code: ', response.status); //should be in between 200-300

    if (!response.ok) {
      console.log(response);
      throw new Error(`conecction failed status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}


makeRequest();