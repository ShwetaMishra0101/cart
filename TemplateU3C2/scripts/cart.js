var pro = JSON.parse(localStorage.getItem("cart"));
cartshow(pro);
function cartshow(pro) {
  // var pro = JSON.parse(localStorage.getItem("cart"));
  var cart = document.getElementById("cart");
  cart.innerHTML = "";
  pro.map(function (ele, idx) {
    var cart = document.getElementById("cart");
    var Name = ele.strMeal;
    var div = document.createElement("div");

    var image = ele.strMealThumb;

    //   console.log("image:", image);
    var price = ele.price;

    // add to cart button-----------////////
    var addtocart = document.createElement("button");

    addtocart.id = "remove";
    addtocart.innerHTML = "remove";
    addtocart.addEventListener("click", function () {
      cartdele(idx);
    });
    ////////////product image///////////
    var img = document.createElement("img");
    img.src = image;
    ///////////product name//////

    var pro_name = document.createElement("p");
    pro_name.innerHTML = Name;

    /////////////price/////

    var pro_price = document.createElement("p");
    pro_price.innerText = price;

    // append//////////
    div.append(img, pro_name, pro_price, addtocart);
    cart.append(div);
  });
}

function cartdele(idx) {
  pro.splice(idx, 1);
  localStorage.setItem("cart", JSON.stringify(pro));
  cartshow(pro);
  price();
}

function price() {
  var a = document.getElementById("total-price");
  a.innerHTML = "";
  var totle = pro.reduce(function (acc, el) {
    return acc + el.price;
  }, 0);
  a.innerHTML = totle;
}
price();

/////

var checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  location.href = "checkout.html";
});
