// single line comment
/* multiline
   comment */

// Function definitions

function funcNoReturn(a, b)
{
  sum = a + b;
  console.log(`${a} + ${b} = ${sum}`);
}

function funcReturn(a, b)
{
  return a + b;
}

function funcOptionalReturn(a = 1, b = 2)
{
  return a + b;
}

// Operators

console.log("1 <= 2 : " + (1 <= 2).toString());
console.log("1 < 2 : " + (1 < 2).toString());
console.log("3 >= 2 : " + (3 >= 2).toString());
console.log("3 > 2 : " + (3 > 2).toString());
console.log("1 == 1 : " + (1 == 1).toString());
console.log("1 != 2 : " + (1 != 2).toString());
console.log("!(1 == 2) : " + (!(1 == 2)).toString());
console.log("!false : " + (!false).toString());
console.log("true && true : " + (true && true).toString());
console.log("false || true : " + (false || true).toString());

// if statements

let num = 10;

if (num > 0)
{
  console.log("Number is positive");
}
else if (num == 0)
{
  console.log("Number is zero");
}
else
{
  console.log("Number is negative");
}

// Loops

let i;

for(i = 1; i <= 10; i++)
{
  console.log(i.toString());
}

i = 1;

while(i <= 10)
{
  console.log(i.toString());
  i++;
}

arr = [[1, 2, 3, 4, 40], [5, 6, 7, 8, 80]];

console.log("Array length : " + arr.length.toString());
console.log("Row 1 of array : " + arr[0].toString());
console.log("Row 2 of array : " + arr[1].toString());
console.log("Row 2 Col 3 value : " + arr[1][2].toString());

let temp;

for(const row of arr)
{
  temp = "";
  
  for(const elem of row)
  {
    temp = temp + elem + " ";
  }

  console.log(temp);
}

console.log(typeof 1.5); // Using 1 would also return a number
console.log(typeof true);
console.log(typeof "test");
console.log(typeof arr);

// Function Examples

funcNoReturn(1, 2);
console.log(`funcReturn(2, 3) : ${funcReturn(2, 3)}`);
console.log(`funcOptionalReturn() : ${funcOptionalReturn()}`);

// Arrow function examples

func1 = () => { return "Test" };
func2 = num => { return num + 10 };
func3 = (num1, num2 = 5) => { return num1 + num2 };

console.log("func1 output : " + func1());
console.log("func2 output : " + func2(50).toString());
console.log("func3 output : " + func3(70).toString());

