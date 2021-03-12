module.exports = function toReadable (number) {
    let res = "";
    let arr = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let arr1 =["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if(number === 0){
        res = "zero";
    }
    if(number <= 20){
        if(number === 20){
            res+=arr1[2];
        } else {
            res +=arr[number];
        }
    } else if(number >20 && number <= 99){
        let a = Math.floor(number/10);
        let b = number%10;
        if(a!=0 && b===0){
            res += arr1[a];
        } else {
            res += arr1[a] +" "+arr[b];
        }
    } else if(number > 99){
        let a = Math.floor(number/100);
        let b = Math.floor((number%100)/10);
        let c = Math.floor((number%100)%10);
        let z = number%100;
        if(a!=0 && b === 0 && c === 0){
            res += arr[a]+" hundred";
        } else if(a!=0 && b != 0 && c === 0){
            if(z<21){
                res += arr[a]+" hundred" + " "+ arr[z];
            } else {
                res += arr[a]+" hundred" + " " + arr1[b];
            }
            
        } else if(a!=0 && b != 0 && c != 0){
            if(z<21){
                res += arr[a]+" hundred" + " "+ arr[z];
            } else {
                res += arr[a]+" hundred" + " " + arr1[b] + " " + arr[c];
            }
        } else if(a!=0 && b === 0 && c != 0){
                res += arr[a]+" hundred" + " " + arr[c];
        }
    }

return res;
}
