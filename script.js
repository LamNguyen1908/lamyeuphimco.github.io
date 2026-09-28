const products = [

 {name:"Aula F75",price:"1.090.000đ",img:"product1.svg"},

 {name:"MAD 60HE",price:"1.290.000đ",img:"product2.svg"},

 {name:"Aula 68HE",price:"690.000đ",img:"product3.svg"},

 {name:"ATK A9SE",price:"1.490.000đ",img:"product4.svg"},

 {name:"Aula 60HE",price:"790.000đ",img:"product5.svg"}

];

function openOrder(name){

 const modal = document.getElementById("orderModal");

 if(!modal) return;

 // Hien lai form dat hang
 document.getElementById("orderForm").style.display = "block";

 // An loi cam on cua don hang truoc
 document.getElementById("thankYou").style.display = "none";

 // Gan ten san pham moi
 document.getElementById("productName").value = name;

 document.getElementById("orderTitle").textContent = "Dat hang - " + name;

 // Mo hop dat hang
 modal.classList.add("show");

}


function closeOrder(){

 const modal = document.getElementById("orderModal");

 if(modal) {
    modal.classList.remove("show");
 }

}


function submitOrder(e){

 e.preventDefault();

 const name = document.getElementById("customerName").value;

 const product = document.getElementById("productName").value;

 // An form
 document.getElementById("orderForm").style.display = "none";

 // Hien loi cam on
 document.getElementById("thankYou").style.display = "block";

 // Hien dung san pham vua dat
 document.getElementById("thankText").textContent =
    "Cam on " + name + "! Don hang " + product + " da duoc ghi nhan.";

}


window.addEventListener("click", e => {

 const modal = document.getElementById("orderModal");

 if(e.target === modal) {
    closeOrder();
 }

});