function convertFahrToCelsius (f) {
    
    let celsius;
    let fahr = Number (f);
   
    if (typeof f !=="boolean" && !isNaN(fahr)) {
        celsius = ((fahr - 32) * 5/9).toFixed(4);
    }
    else if(Array.isArray (f)) {
        celsius = `${JSON.stringify(f)} is not a valid number but a/an array`
    }
    else {
        celsius = `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}`
    }
    console.log(celsius);
    return celsius;
}
convertFahrToCelsius(200);


const checkYuGiOh = (n)=> {

    let yuGiOh = [];
    let check = JSON.stringify(n);

    if (isNaN(n) || n === null || Array.isArray(n)){
        console.log(`invalid parameter: ${check}`);
        return `Invalid //parameter: ${check}`;
    } 
    else {
        for (let i = 1; i<=n; i++){
        if (n === 1){
        yuGiOh.push(1);
      } else if (i%2 ===0 && i%3 === 0 && i%5 === 0){
       yuGiOh.push("Yu-Gi-Oh")
      } else if (i%2 ===0 && i%3 === 0){
       yuGiOh.push("Yu-Gi")
      } else if (i%2 === 0 && i%5 === 0){
       yuGiOh.push("Yu-Oh")
      }else if (i%3 === 0 && i%5 === 0){
       yuGiOh.push("Gi-Oh")
      }else if (i%2 === 0){
       yuGiOh.push("Yu")
      }else if (i%3 === 0){
       yuGiOh.push("Gi")
      }else if (i%5 === 0){
       yuGiOh.push("Oh")
      }else{
       yuGiOh.push(i)
      }
    } 
     console.log(yuGiOh)
     return yuGiOh;
    }
}
checkYuGiOh(20);

checkYuGiOh('fizzbuzz is meh');