window.addEventListener("load", function () {
    console.log("loaded js...");
    console.log(localStorage.getItem("storedExpenseListArr"));

    const storedData = localStorage.getItem("storedExpenseListArr");
    let expenseListArr = storedData ? JSON.parse(storedData) : [];

    try {
        expenseListArr = storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        console.error("Error parsing JSON:", error);
        localStorage.removeItem("storedExpenseListArr"); // Clear invalid storage
    }

    console.log("Loaded expenseListArr:", expenseListArr);

    const addExpenseBtn = document.getElementById("addExpenseBtn");
    const expenseListDiv = document.getElementById("expenses-table-div");

    addExpenseBtn.addEventListener('click', () => {
        inputData();
    });

    function inputData() {
        console.log("inside inputData func");
        const inputExpense = document.getElementById("inputExpense").value.trim();
        const inputAmount = Number(document.getElementById("inputAmount").value.trim());
        console.log("inputExpense:", inputExpense, "inputAmount:", inputAmount);

        if (!inputExpense || isNaN(inputAmount)) {
            alert("Please input all fields");
            return;
        }
        expenseListArr.push({
            expenseName: inputExpense,
            expenseAmount: inputAmount,
            expenseId: expenseListArr.length
        });

        console.log("Updated expenseListArr:", expenseListArr);
    

        updateDisplay();
    }

    function updateDisplay() {
        let totalAmount = 0;
        console.log("inside updateDisplay function");

        const expenseListDivContent = document.getElementById("expense-list-div");
        expenseListDivContent.innerHTML = "";

        if (expenseListArr.length > 0) {
            expenseListDiv.classList.remove("hidden");
        } else {
            expenseListDiv.classList.add("hidden");
        }

        expenseListArr.forEach((expense) => {
            expenseListDivContent.innerHTML += `  
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${expense.expenseName}
                </th>
                <td class="px-6 py-4">
                    ${expense.expenseAmount}
                </td>
                <td class="px-6 py-4">
                    <button data-id="${expense.expenseId}" class="removeBTN px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all">
                        DELETE
                    </button>
                </td>
            </tr>`;
            totalAmount += expense.expenseAmount;
        });

        document.getElementById('total-amount-display').innerText = totalAmount;

        // ✅ Corrected JSON.stringify()
        localStorage.setItem("storedExpenseListArr", JSON.stringify(expenseListArr));
    }

    function removeExpense(expenseId) {
        console.log("inside removeExpense function");

        // ✅ Corrected filter logic
        expenseListArr = expenseListArr.filter(exp => exp.expenseId !== expenseId);
        console.log("Updated expenseListArr:", expenseListArr);

        if (expenseListArr.length === 0) {
            expenseListDiv.classList.add("hidden");
        }

        localStorage.setItem("storedExpenseListArr", JSON.stringify(expenseListArr));
        updateDisplay();
    }

    // ✅ Moved event listener outside `forEach()` to prevent multiple bindings
    expenseListDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("removeBTN")) {
            const expenseId = Number(event.target.dataset.id);
            removeExpense(expenseId);
        }
    });

    // ✅ Load existing expenses on page load
    updateDisplay();
});
