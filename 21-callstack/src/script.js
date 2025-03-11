function a() {
  console.log("a");
  aa();
}
function aa() {
  console.log("aa");
  ab();
}
function ab() {
  console.log("ab");
}
a();
//-----------------------

function x() {
  console.log("x");
  xa();
}

function xa() {
  console.log("xa");
  xb();
}

function xb() {
  console.log("xb");
}
x();
/* 
    Here I explained what I understand about call stack.
    
*/
