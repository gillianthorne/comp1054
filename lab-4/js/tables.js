// STEP 11: Call to tablesorter script here
const consoleTable = document.querySelector("table");
let sortableTable = new Tablesort(consoleTable);

const header = consoleTable.querySelectorAll("thead th");
const data = consoleTable.querySelectorAll("tbody tr")

header.forEach((category) => {
    category.addEventListener("click", (event) => {
        const index = Array.from(header).indexOf(category);
        data.forEach((record) => {
            const row = record.querySelectorAll("td")
            row.forEach((cell) => {
                const cellIndex = Array.from(row).indexOf(cell)
                if (cellIndex == index) cell.classList.add("selected");
                else cell.classList.remove("selected")
            })
        })
    })
})