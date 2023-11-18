// Creates and returns an object with the properties:
//  name
//  age
//  city
function createObject() {
    let object = {}

    object.name = "bob";
    object.age = 22;
    object.city = "Syd";
    return object
}

// Returns a two dimensional array 
// with an array of keys and an array of values from obj
function keysAndValues(obj) {
    // This isn't the correct way to get the keys and values
    // of an object in JavaScript. Fix the code:
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    // Dont change the function signature or the return statement
    return [keys, values]
    
} 

// Returns obj with all invalid data removed
// Only valid keys are:
//  name
//  age
//  city
function badData(obj) {
    for (let key in obj) {
        if (!["name", "age", "city"].includes(key)) {
            delete obj[key];
        }  
    }
    return obj;
}


module.exports = {
    createObject,
    keysAndValues,
    badData
}