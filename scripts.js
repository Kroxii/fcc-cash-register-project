let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');
const toggleThemeBtn = document.getElementById('toggle-theme');

// Affiche le résultat de la transaction.
const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
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
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

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

  if (totalCID < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

// Si le total du tiroir-caisse correspond exactement au change à rendre, 
// on doit fermer le tiroir-caisse après la transaction.
  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }

// Si le tiroir-caisse n'a pas assez de fonds pour rendre la monnaie, 
// afficher un message d'erreur.
  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

// Fonction qui vérifie si un montant a été saisi avant de lancer la vérification du tiroir-caisse
const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

// Met à jour l'affichage de l'interface utilisateur et le contenu du tiroir-caisse
const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  
// Si un change (monnaie à rendre) est fourni, on met à jour le tiroir-caisse
  
   if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      const targetArr = cid.find(
        ([denominationName, _]) => denominationName === changeDenomination
      );
      targetArr[1] =
        (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) / 100;
    });
  }

// Réinitialise le champ de saisie du client
  cash.value = '';

// Affiche le prix total à l'écran
  priceScreen.textContent = `Total: $${price}`;

// Affiche le contenu actuel du tiroir-caisse
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
      )
      .join('')}
  `;
};

purchaseBtn.addEventListener('click', checkResults);

// Permet de valider avec la touche "Entrée" dans le champ de saisie
cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});


// Ajoute un mode sombre à l'interface utilisateur
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeBtn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️'
    : '🌙';
});

updateUI();