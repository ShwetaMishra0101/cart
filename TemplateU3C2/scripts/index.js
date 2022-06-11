async function show() {
  var res = await fetch("https://masai-food-api.herokuapp.com/api/meals/india");

  //   console.log("data:", data);

  try {
    var data = await res.json();
    // console.log("data:", data[0].meals);
    var dish = data[0].meals;
    // console.log("dish:", dish);

    dish.map(function (ele, idx) {
      var menu = document.getElementById("menu");
      var div = document.createElement("div");
      var Name = ele.strMeal;

      var image = ele.strMealThumb;

      //   console.log("image:", image);
      var price = ele.price;

      // add to cart button-----------////////
      var addtocart = document.createElement("button");

      addtocart.id = "addtocart";
      addtocart.innerHTML = "add to cart";
      addtocart.addEventListener("click", function () {
        cartFun(ele, idx);
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
      menu.append(div);

      var goCart = document.getElementById("goCart");
      goCart.addEventListener("click", function () {
        location.href = "./cart.html";
      });
    });

    // console.log("fill");
  } catch (err) {
    // console.log(err);
  }
}

function cartFun(ele, idx) {
  var count = document.getElementById("count");
  var arr = localStorage.getItem("cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("cart"));
  }
  arr.push(ele);
  arr = localStorage.setItem("cart", JSON.stringify(arr));
  count.innerHTML = JSON.parse(localStorage.getItem("cart")).length;
}

show();
