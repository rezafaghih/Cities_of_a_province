// if you like to write this code clean you shoud use async and await function and method



provinceID = 4; // your province target id (you can find all of province in province.json file)


fetch('iran-geography/province.json').then((response)=>{
  return response.json();
}).then(data => {
  for (let i = 0; i<data.length; i++){
    if (data[i].id == provinceID){
      getCityList(provinceID, data[i].title);
    }
  }
})


function getCityList(ID, province){
  fetch('iran-geography/cities.json').then((response)=>{
    return response.json();
  }).then(data => {
    for (let i = 0; i<data.length; i++){
      if (data[i].province_id == ID){
        // console.log province and cities
        console.log(data[i].title, province)
      }
    }
  })
}