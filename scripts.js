let price = 3.26;
let cid = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0]
];

const displayChangeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

const formatResults = (status, change) => {
    displayChangeDue.innerHTML = `<p>${status}</p>`;
    displayChangeDue.innerHTML += change
    .map(
        ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
)
.join('');
};

