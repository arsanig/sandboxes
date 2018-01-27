var side1 = 5;
var side2 = 6;
var side3 = 7;
var halfP = (side1 + side2 + side3)/2;
var area = Math.sqrt(halfP*(halfP-side1)*(halfP-side2)*(halfP-side3));
console.log(area);
