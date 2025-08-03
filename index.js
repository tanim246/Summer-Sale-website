const nameList = document.getElementById("nameList");
let total = document.getElementById("total")

const discountTotal = document.getElementById("discountTotal")

let totalPrice = 0;
const handleClick = (data) => {
  const name = data.childNodes[5].childNodes[1].innerText;
  const amountAndTk = data.childNodes[5].childNodes[3].innerText;
  const amount = amountAndTk.split(" ")[0];

  const amountNumber = parseInt(amount);

  totalPrice = totalPrice + amountNumber;
  total.innerText=totalPrice
  discountTotal.innerText = totalPrice
//   console.log(totalPrice);
  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);
};
