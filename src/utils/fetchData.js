export const excerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart',
    headers: {
      'X-RapidAPI-Key': 'eeeac186bbmshc1fbf4d3cf82260p16fc6djsnf53920e5d78f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options) 
    const data = await response.json();
  
    return data
} 