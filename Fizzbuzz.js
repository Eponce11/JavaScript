
var temp;

for (i = 1; i <= 100; i++) {

    var temp = "";

    if (i % 3 == 0) {
        temp += "Fizz";
    } 

    if (i % 5 == 0) {
        temp += "Buzz";
    }
    
    if (temp == "") {
        console.log(i);
    } else {
        console.log(temp);
    }
}