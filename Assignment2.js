// Question-----------------------------------------------01

// function addNumber(x) {
//      return function (y) {
//           return x + y;
//      }
// }
// var addFive = addNumber(5);
// console.log(addFive(2));

// Question------------------------------------------------------------02

// var myArray = [1, 2, 3, 4, 5, -1, 0];
// function searchArray(arr, val) {
//      if (arr.length === 0) {
//           return false;
//      }

//      if (arr[0] === val) {
//           return true;
//      } else {
//           return searchArray(arr.slice(1), val);
//      }
// }
// console.log(searchArray(myArray, 2)); 


// Question------------------------------------------------------03
// let para = document.getElementById("para")

// let para2 = document.createElement("p")
// para.appendChild(para2)
// let stringData = document.createTextNode("Hello! Sir")
// para2.appendChild(stringData)



// Question----------------------------------------------------04

// let mainBox = document.getElementById("mainBox");


// var mainDiv = document.createElement("div");
// mainDiv.setAttribute("id", "mainInput");
// mainBox.appendChild(mainDiv);

// var input = document.createElement("input");
// input.setAttribute("placeholder", "Enter any word");
// input.setAttribute("id", "input");
// mainDiv.appendChild(input);

// var plusBtn = document.createElement("button");
// plusBtn.setAttribute("onclick", "addData()");
// mainDiv.appendChild(plusBtn);

// var btnData = document.createTextNode("ADD")
// plusBtn.appendChild(btnData)

// var msg = document.createElement("p");
// msg.setAttribute("id", "msg");
// mainBox.appendChild(msg);

// var dataUl = document.createElement("ul");
// mainBox.appendChild(dataUl)

// function addData(){
//     var dataMsg = document.getElementById("input").value;

//         var dataLi = document.createElement("li");
//         dataUl.appendChild(dataLi);

//         var liText = document.createTextNode(dataMsg);
//         dataLi.appendChild(liText);

//         var liTextData = document.createTextNode(dataMsg);
//         liText.appendChild(liTextData);

//         document.getElementById("input").value = "";
// }

// Question----------------------------------------------------------------05
// let myPara = document.getElementById("paragraph");

// myPara.innerHTML = "<b>Hello!</b>";
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";
// myPara.style.padding ="10px"

// let text = document.createElement("p")
// myPara.appendChild(text)
// let textdata = document.createTextNode("Pakistan Zindabad")
// text.appendChild(textdata)
// text.style.backgroundColor = "blue"
// text.style.color = "#fff"
// text.style.padding ="10px"


// Question------------------------------------------------------------06
// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   var myObj = {name: "Suneel Kumar", age: 18, city: "Karachi"};
// saveObjectToLocalStorage("myKey", myObj);


//Question------------------------------------------------------------------07
// function getObjectFromLocalStorage(key) {
//     var storedObj = localStorage.getItem(key);
//     return storedObj ? JSON.parse(storedObj) : null;
//   }
//   var myObj = getObjectFromLocalStorage("myKey");
// console.log(myObj); 


//Question--------------------------------------------------------------------08
// function saveToLocalStorage(obj) {

//     for (var prop in obj) {
//          if (obj.hasOwnProperty(prop)) {
//               localStorage.setItem(prop, JSON.stringify(obj[prop]));
//          }
//     }
//     var newObj = {};
//     for (var i = 0; i < localStorage.length; i++) {
//          var key = localStorage.key(i);
//          newObj[key] = JSON.parse(localStorage.getItem(key));
//     }
//     return newObj;
// }
// var myObj = { name: 'Suneel', age: 18, city: 'Karachi' };
// var newObj = saveToLocalStorage(myObj);
// console.log(newObj);


