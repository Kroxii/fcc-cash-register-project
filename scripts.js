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

// Si le client paie le montant exact, afficher un message et arrêter la fonction.
  if (cashInCents === priceInCents) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

// Calcul du change à rendre.
  let changeDue = cashInCents - priceInCents;
  
  // On convertit chaque montant en centimes pour éviter les erreurs de flottants.
  const reversedCid = [...cid]
    .reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);
  const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  const result = { status: 'OPEN', change: [] };
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

// Si le total du tiroir-caisse correspond exactement au change à rendre, 
// on doit fermer le tiroir-caisse après la transaction.
  if (totalCID === changeDue) {
  result.status = 'CLOSED';
  }

