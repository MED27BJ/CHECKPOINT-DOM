// variable declaration
var lik = document.querySelectorAll(".like");
var pitem=document.querySelectorAll(".Item");
var dec = document.querySelectorAll(".minus-btn");
var inc = document.querySelectorAll(".plus-btn");
var q = document.querySelectorAll(".Quant");
var p = document.querySelectorAll(".price");
var total = document.getElementById("finalPrice");
var del=document.querySelectorAll(".delete");
var tot1 = 0;
// Update total
for (let x = 0; x < pitem.length; ++x) {
  price=p[x].textContent;
  tot1=tot1+Number(price);
}
total.value=tot1;
// colorizing heart
for (let x = 0; x < pitem.length; ++x) {
  lik[x].addEventListener("click", function () {
    if (lik[x].style.color !== "red") {
      lik[x].style.color = "red";
    } else {
      lik[x].style.color = "black";
    }
  });
//  increasing quantities
   let price=p[x].textContent;
   inc[x].addEventListener("click",function (){  
      q[x].value=parseInt(q[x].value)+1;
      p[x].textContent=(price*q[x].value).toFixed(2);
    total.value=(Number(total.value)+Number(price)).toFixed(2);
      });
// decreasing quantities
     dec[x].addEventListener("click",function (){
   let d=parseInt(q[x].value);
     if(d>1){
      q[x].value=d-1;
      p[x].textContent=(price*q[x].value).toFixed(2);
      total.value=(Number(total.value)-Number(price)).toFixed(2);
       }});
    // delete Items
del[x].addEventListener("click",function (){
  total.value=(Number(total.value)-Number(price*q[x].value)).toFixed(2);
  pitem[x].remove();
});   
}