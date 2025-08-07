const nameList = document.getElementById("nameList");
let total = document.getElementById("total");

const discountTotal = document.getElementById("discountTotal");
const purchaseBtn = document.getElementById("purchaseBtn");
const applyBtn = document.getElementById("applyBtn");
const inputCupon = document.getElementById("inputCupon");
const discountTk = document.getElementById("discount");


let totalPrice = 0;
const handleClick = (data) => {
  const name = data.childNodes[5].childNodes[1].innerText;
  const amountAndTk = data.childNodes[5].childNodes[3].innerText;
  const amount = amountAndTk.split(" ")[0];

  const amountNumber = parseInt(amount);

  totalPrice = totalPrice + amountNumber;
  total.innerText = totalPrice;
  discountTotal.innerText = totalPrice;
  //   console.log(totalPrice);
  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);
  if (totalPrice > 0) {
    purchaseBtn.disabled = false;
  }
  if (totalPrice > 200) {
    applyBtn.disabled = false;
  }
};

applyBtn.addEventListener("click", () => {
  if (inputCupon.value.trim() === "") {
    alert("Input kali kne");
    return;
  }

  else if (inputCupon.value === "SELL200") {
    const discount = totalPrice * 0.2;
    const totalWithDiscount = totalPrice - discount;
    discountTk.innerText = discount.toFixed(2);
    discountTotal.innerText = totalWithDiscount;
  } else {
    alert("Coupon dosn't match");
  }
});

purchaseBtn.addEventListener("click", () => {
  totalPrice = 0;
  // console.log(totalPrice)

  total.innerText = " 00";
  discountTotal.innerText = "00";
  discountTk.innerText = "00";
  nameList.innerHTML = "";
});
