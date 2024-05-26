# iran province and city package 

a simple javascript library (Package) to get Iran province and cities of a province 

you can use this library in your project to get cities and province of iran 


<h2>🛠️ Installation Steps:</h2>

<p>1. Installation</p>

```
npm i @rezafaghih/iran-province-city-javascript --save
```

<h2>How to use it? 💻</h2>

for using this library in your project you need to create province class object 

```javascript
    var province_lib = new province (); 

    // you can call any methods you like
```

there is few methods you can call them and use them in your project

<h3>Get Iran Province List As Json Object</h3>

if you want to get iran province list as json Object you can use this method

```javascript 
    province_lib.getIranProvinceList(); // simply this method will return a json 
```


<h3>Get Cities Of a Province</h3>

if you know Id of a province and you want to get cities of that province you can use this method

```javascript 
    province_lib.getProvinceCityList(cityID); // simply this method will return a json 
```

<h3>Get Count of province cities</h3>

get count of province cities you can use this method 
```javascript 
    province_lib.getCountOfProvinceCities(cityID); // simply this method will integer
```

<h3>Get ProvinceID From Name</h3>

this method will return the provinceID from province name
```javascript 
    province_lib.findProvinceIdFromName (name); // simply this method will ID of province
    // name should be string
    // name can be persian like (فارس , تهران , بوشهر)
    // name can be english like (Tehran, Bushehr, Fars)
```


- [ ] Add Province Dropdown menu
- [ ] Add Search for Dropdown

