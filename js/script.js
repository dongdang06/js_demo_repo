// console.error(123456789);
// console.log(123456789);
// console.warn(123456789);
// confirm('Xác nhận bạn đủ 18 tuổi');
// prompt('Nhập tuổi của bạn vào đây')
// setInterval(function() {
//    alert('Thông báo')
// }, 100000) // Thực thi liên tục sau một khoảng thời gian
// setTimeout(function() {
//    alert('Thông báo')
// }, 1000) // Thực thi sau một khoảng thời gian




// var a=1;
// var b=2;
// var c=6;

// if(a>b){
//     console.log('a>b là đúng')
// } else{
//     console.log('a>b là sai')
// }
// if(c%2==0){
//     console.log('c là số chẵn')
// }else{
//     console.log('c là số lẽ')
// }

// var isSuccess = a>b;
// console.log(isSuccess)





/**
 * 0
 * ''
 * null
 * NaN
 * false
 * underfined
 */

var result = 'A' && 'B' && 'C';
console.log(result);
var result2 = 'A' && 'B' && NaN && 'D';
console.log(result2) // nếu thấy 1 value nào trùng 6 vlue trên thì lấy ngay value đó
var result3 = null || 'A' || 'B' || 'C';
console.log(result3) // nếu gặp value nào khác với 6 value trên thì lấy ngay value đó




// các kiểu dữ liệu

// Number type 
 var a=1;
 var b=2;

console.log(typeof a) //Cách kiểm tra kiểu

// String type 
 var firstName = 'Đông'
 var lastName = 'Đặng'
 console.log(`Tôi tên là : ${firstName} ${lastName}`)

// Bboolean type
 var isSuccess = true

// Underfined type
 var age; // không gán giá trị

// Null type
 var isNull = null; // nothing không có gì

// Symbol type
 var id = Symbol('id')
 var id2 = Symbol('id')

 console.log(id===id2)

// Function 
 var myFunction = function() {
 alert('Hi. How are you?'); 
}
myFunction() //Cách gọi Function


//Object types
// var myObject = {
//     name: 'Đông',
//     birth: '07-09-2006',
//     adress: 'Hà Tĩnh',
//     // myFunction = function() {

//     // }
// };
// console.log('myObject', myObject)


var myArray = [
    'JavaScript',
    'PHP'
];
console.log(myArray)

var demo = '      Học JS cơ JS bản.  ';
var demo2 = 'Học Java Script cơ JS bản.';
console.log(demo.lastIndexOf('JS'))
console.log(demo.slice(-4 ,-1))



// replace
console.log(demo.replace(/JS/g, 'Java Script')) // /JS/g: biểu thức chính quy để thay thế tất cả các từ JS
//
/*
console.log(demo.toLocaleUpperCase()) //In hoa
console.log(demo2.toLocaleLowerCase()) //In thường
*/
//trim
console.log(demo.trim()) //Loại bỏ khoảng trắng


//Split
// var demo3 = 'C++, C#, Pascal, Java'
// console.log(demo3.split(', ')) //Cắt thành Array

// const demo4 = 'Dong Dang';
// console.log(demo4.charAt(0)) //Lấy kí tự
// console.log(demo4[6]) //Lấy kí tự
 

//Number
// var result = 20 / 'abc';
// console.log(isNaN(result)) // Kiểm tra NaN
// var age = 16;
// //var myString = age.toString(); // chuyển từ kiểu number sang kiểu string
// console.log(age.toString()); // chuyển từ kiểu number sang kiểu string
// /**
//  * kiểu number : chữ xanh
//  * kiểu string : chữ đen
//  */



// var PI = 3.14;
// var price = 35.258293487;
// console.log(PI.toFixed()) // làm tròn số
// console.log(price.toFixed(2)) // làm tròn số



var myArray2 = [
    'Javascript',
    'Pascal',
    'Python',
    'C++'
];
var myArray3 = [
    'C#',
    'PHP'
]
// console.log(myArray2[2]) //Lấy phần tử của mảng

// console.log(Array.isArray(myArray2)) //Kiểm tra Array


// console.log(myArray2.join(' - ')) // chuyển mảng

// console.log(myArray2.pop()) //Xóa element cuối mảng
// console.log(myArray2)

// console.log(myArray2.shift()) //Xóa phần từ đầu mảng
// console.log(myArray2)

// console.log(myArray2.push('dong', 'dang')) //Thêm phần từ vào cuối mảng
// console.log(myArray2)

// console.log(myArray2.unshift('dong')) //Thêm phần tử vào đầu mảng
// console.log(myArray2)

// myArray2.splice(2 , 1 , 'dong','dang') // tên biến . splice(vị trí bắt đầu , số phần tử sẽ xóa , chèn phần tử vào nào đó)
// console.log(myArray2)

console.log(myArray2.concat(myArray3)) //Nối mảng

var emailKey = 'email1'
var myInfo = {
    name: 'Dong',
    age: '16',
    address: 'Ha Tinh',
    [emailKey] : 'dong2006slclhtht@gmail.com'
}
var myKey = 'address'

myInfo['my-email'] = 'dong2006slclht@gmail.com'
console.log(myInfo['name'])
console.log(myInfo[myKey])
console.log(myInfo)
delete myInfo.age; // Xóa phần tử
console.log(myInfo)


