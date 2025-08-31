let total = 0;

function addExpense() {
  let name = document.getElementById("expenseName").value;
  let amount = parseInt(document.getElementById("expenseAmount").value);

  if (name === "" || isNaN(amount)) {
    alert("Please enter expense name and amount");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.innerHTML = `${name} - ₹${amount} <button class="deleteBtn" onclick="deleteExpense(this, ${amount})">X</button>`;
  document.getElementById("expenseList").appendChild(li);

  // Update total
  total += amount;
  document.getElementById("total").innerText = total;

  // Clear input fields
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

function deleteExpense(button, amount) {
  button.parentElement.remove(); // remove list item
  total -= amount;
  document.getElementById("total").innerText = total;
}
