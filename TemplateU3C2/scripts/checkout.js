var a = document.getElementById("checkpage");
a.addEventListener("submit", function () {
  event.preventDefault();
  var id = setTimeout(function () {
    alert("Your order is accepted");
  }, 0);
  var id2 = setTimeout(function () {
    alert(" Your order is being cooked");
  }, 3000);
  setTimeout(function () {
    alert("Your order is ready ");
  }, 8000);
  setTimeout(function () {
    alert("Order out for delivery");
  }, 10000);
  setTimeout(function () {
    alert("Order delivered");
  }, 12000);
});
