let keys = parseInt(prompt("Enter your keys: "));
    // Prompt the user to enter a value, then parse it into a number
switch(keys){
    // Us switch case to perform multiple conditions
    case 0:  console.log("We sank together");
        break;
    case 30000:  console.log("We made it!");
        break;
    // Each case will specify the required condition of the mentioned variable
    default: console.log("we need to swim a little bit more");
    // We use default when none of the previous cases is true
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let keys = parseInt(prompt("Enter your keys: "));
 function mySwitch(keys){
    // We define a function here to prevent writing the same code multiple time
    switch (keys) {
        case 0: console.log("We sank together"); 
        break;
        case 30000:  console.log("We made it!");
        break;
        default:   console.log("we need to swim a little bit more");

    }
}

mySwitch(keys); // We call the function
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let arr = prompt("enter an arr a,b,c,d,e,..."); // Prompt the user to enter an array
arr = arr.split(","); // Split the commas from the array
console.log(arr);

var min=arr[0];
var max=arr[0];
    // Declare both min and max as the first element of the array


for(var i =0; i<arr.length;i++){
    // For loop to pass all the indexes of the array
    if(arr[i]>max){
        max = arr[i];
        // As long as any element of the array is greater than max, then it will be assigned to max
    }

      if(arr[i]<min){
        min = arr[i];
        // As long as any element of the array is less than min, then it will be assigned to min
    }
}

console.log("min: " + min + "\nmax: "+ max);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function minMax(array){
    // We declared a function to find the min and max number of the elements in a array

var min=array[0];
var max=array[0];

for(var i =0; i<array.length;i++){

    if(array[i]>max){
        max = array[i];
    }

      if(array[i]<min){
        min = array[i];
    }
}

console.log("min: " + min + "\nmax: "+ max);


}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



for(var i =1; i<7; i++){
    // For loop to assign the number of the first dimension of an array
    for(var j=1; j<=i; j++){
        // For loop to assign the number of the second dimension of an array
        console.log("*");
    }

    console.log("\n");
        // Each time the first dimension of the array finishes its loop, it will go to another line
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myImg(num){
    // We declare a function to print '*' as many as it is mentioned in the loop
    for(var i =1; i<=num; i++){

    for(var j=1; j<=i; j++){

        console.log("*");
    }

    console.log("\n");

}
}
myImg(6);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var arr1 = [4,107,43,67,99,3,0,85];
    // Declare a random array
var max=arr1[0];
    // Assign max to the first element of the defined array
for(var y=0;y<arr1.length;y++){
    // Make the first loop to pass over all the elements of the array
    for(var i =0; i<=y;i++){
        // Make the second loop to assign all the elements through the variable 'y'
        if(arr1[i]>max){
            max = arr1[i];
            // As long as any element of the array is greater than max, then it will be assigned to max
        }

    }
}
console.log("Max value is : "+max);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function myMax(arr1){
    // We daclare a function to find the maximum number of a defined array using multiple for loops
    var max=arr1[0];

    for(var y=0;y<arr1.length;y++){
    for(var i =0; i<=y;i++){

        if(arr1[i]>max){
            max = arr1[i];
        }

    }
}
console.log("Max value is : "+max);


}


myMax([55,43,72,34,64]);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function square(num){
    return num*num;
    // we declare a function to return the square number of the entered parameter
}

console.log(square(5));