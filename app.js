
//Code for CountingDuplicates using regex.

var text = "abBcCdDe";

function CountingDuplicates(text){
        return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(CountingDuplicates(text));

