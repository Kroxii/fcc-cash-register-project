# 🏦 Cash Register App

🔗 **Live Website**: ()

> ✨ *In this project, I've created a Cash Register app that calculates and returns the change to the customer based on the price, cash provided, and available cash in the drawer.*

---

## 🎯 Project Objective

The goal of this project is to build a **Cash Register App** that calculates and returns change to the customer based on the following conditions:
- The price of the item.
- The cash provided by the customer.
- The available cash in the cash drawer.

The app should also display the correct status message in various scenarios, such as:
- "INSUFFICIENT_FUNDS" when the cash drawer doesn't have enough money to provide the correct change.
- "CLOSED" when the cash drawer has the exact amount needed to provide the change.
- "OPEN" when change can be given, listing the breakdown of the change in coins and bills, sorted from highest to lowest.

---

## 📌 Project Requirements

- [x] An input element with `id="cash"` to capture the cash provided by the customer.
- [x] A `div`, `span`, or `p` element with `id="change-due"` to display the change.
- [x] A button element with `id="purchase-btn"` to trigger the change calculation.
- [x] Validation that checks if the cash provided by the customer is sufficient to cover the price:
  - If the customer doesn’t have enough cash: "Customer does not have enough money to purchase the item".
  - If the customer provides the exact amount: "No change due - customer paid with exact cash".
- [x] If the drawer can provide the correct change, show the exact change due in bills and coins, sorted from highest to lowest.
- [x] Handle edge cases such as:
  - Insufficient funds in the drawer.
  - Exact change being provided (status: CLOSED).
  - Correct change but no exact matching denominations in the drawer.

---

## ✅ User Stories

1. **Price Comparison**:
   - When the price is greater than the cash provided by the customer, an alert should display: "Customer does not have enough money to purchase the item".
   
2. **Exact Cash**:
   - If the customer pays the exact amount, the output should read: "No change due - customer paid with exact cash".

3. **Change Calculation**:
   - If the price is 19.5 and the customer pays 20, and if the cash drawer (`cid`) contains sufficient bills/coins, the output should show:  
   "Status: OPEN QUARTER: $0.5".

4. **Insufficient Cash in Drawer**:
   - If the price is 19.5, the customer pays 20, but the drawer does not contain enough cash, the output should show:  
   "Status: INSUFFICIENT_FUNDS".

5. **Change Due in Various Denominations**:
   - For prices like 3.26, if the customer pays 100 and the cash drawer has enough denominations, the output should be sorted by highest to lowest:  
   "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".

---

## 💻 Technical Details

- **Input**: 
  - `#cash` input field accepts the amount the customer gives.
  - `#purchase-btn` triggers the purchase and calculates the change.
  - `#change-due` displays the result with change or a status message.

- **Currency Units**: 
  - Penny = $0.01
  - Nickel = $0.05
  - Dime = $0.10
  - Quarter = $0.25
  - Dollar = $1
  - Five Dollars = $5
  - Ten Dollars = $10
  - Twenty Dollars = $20
  - One Hundred Dollars = $100

---

## 🧑‍💻 Project Context

This is a required project for the **JavaScript Algorithms and Data Structures** certification from freeCodeCamp.

Through this project, I practiced:

- Handling edge cases in a real-world scenario (e.g., insufficient funds, exact change).
- Working with arrays to store currency denominations.
- DOM manipulation using JavaScript to create an interactive application.
- Input validation and error handling for a smooth user experience.
- Sorting arrays based on criteria (highest to lowest denominations).

---

## 📫 Contact

- GitHub: [@Kroxii](https://github.com/kroxii)   
- Email: [iremii.leon@gmail.com](mailto:remii.leon@gmail.com)
---

⭐ *Thank you for checking out this project! Feel free to leave a star if you found it useful or inspiring.*

