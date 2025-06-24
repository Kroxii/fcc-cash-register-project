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

// Affiche le résultat de la transaction.
const formatResults = (status, change) => {
    displayChangeDue.innerHTML = `<p>${status}</p>`;
    displayChangeDue.innerHTML += change
    .map(
        ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
)
.join('');
};

// Vérifie si le client a donné assez d'argent pour l'achat. Si non → Alerte.
const checkCashRegister = () => {
    const cashInCents = Math.round(Number(cash.value) * 100);
    const priceInCents = Math.round(price * 100);
    if (cashInCents < priceInCents) {
        alert('Customer does not have enough cash.');
        cash.value = '';
        return;
    }
};



// Optionnel : activer le mode nuit selon la préférence système au chargement
const btn = document.getElementById('toggle-dark');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  btn.textContent = '☀️';
}
