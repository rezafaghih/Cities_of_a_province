
class province {
  constructor (name = ''){
    this.provinceName = name;
  }


  /**
   * 
   * @param {string} name 
   * @returns {int} provinceID if name exist
   */

  findProvinceIdFromName (name){
      var xhr = this.jsonAjax(0);
      var json = JSON.parse(xhr.responseText);
      var provinceID = null;
      json.forEach(element => {
        
          if (element.title == name){
            provinceID = element.id
            // return element.id
          }
      });

      if (provinceID == null){
        console.error(`[Iran Province package] : There is no province with name ${name}`);
      }else{
        return provinceID;
      }
  }

  /**
   * this function will return Iran Province list as json
   */
  getIranProvinceList (){
    var xhr = this.jsonAjax(0);
    var json = JSON.parse(xhr.responseText);
    return json;
  }

    /**
   
    * @param {int} provinceID
    * this function will return Province citys list as json \n
    * you can find province id from getIranProvinceList() method or findProvinceIdFromName() Method
   */
    getProvinceCityList (provinceID){
      var xhr = this.jsonAjax(1);
  
    
          var newObject = {};
          var json = JSON.parse(xhr.responseText);
          var index = 0;
          json.forEach(element => {
            if (element.province_id == provinceID){
              newObject[index] = element;
              index++;
            }
          });

          return newObject;
    
    }

     /**
     * get count of province cities
     */
     getCountOfProvinceCities(provinceID){
      var xhr = this.jsonAjax(1);
    
        var count = 0;
        var json = JSON.parse(xhr.responseText);
        json.forEach(element => {
          if (element.province_id == provinceID){
            count++;
          }
        });
        return count;
    }


    

  /**
   * 
   * @param {int} type
   * 0 = province 
   * 1 = city  
   */
  jsonAjax (type = 0){
    var xhr = new XMLHttpRequest();
    if (type == 0){
      xhr.open("GET", "json/province.json", false);
    }else{
      xhr.open("GET", "json/cities.json", false);
    }

    xhr.send();
    return xhr;
  }


  
}
