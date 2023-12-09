// 1)

const getArray = (n) => {
    if (n.length <= 2) {
      return "n length should be greater than 2.";
    }
  
    const sumFirstTwo = n.slice(0, 2).reduce((acc, val) => acc + val, 0);
  
    const productRest = n.slice(2).reduce((acc, val) => acc * val, 1);
  
    return [sumFirstTwo, productRest];
  };
  
  const nArray = [2, 3, 4, 5];
  const result2 = getArray(nArray);
  console.log(result2);
  
  





// 2)

const getCity = (user) => {
    const {banks} = user;
    if (banks && banks[2] && banks[2].address && banks[2].address.city) {
    const { banks: [, , {address: {city} } ] } = user;
        return city;
    }
        return undefined;
    
}
    
const user = {
    name: "anna", 
    age: 25,
    banks: [
        {credit: true,}, 
        {balance: false},
        {
            address: {
                city: "tbilisi"
            }
        }
    ]
};

const result = getCity(user);
console.log(result);




// 3)

const copyObj = obj => {
    return {...obj};
}

const object = {
    lastname: "Bond", 
    gender: "male",
    work: {
        company: "store&co"
    }
};

const copiedObject = copyObj(object);
 console.log(object);
 console.log(copiedObject);

