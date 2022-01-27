// create tables

const creation = {
  createTable: function (tableColumnNumber) {
    const exist = utility.checkExist(tableColumnNumber)
    if (exist) {
      alert('table already exist')
      return
    }
    const table = document.getElementsByClassName(`table-container`)[0]
    const rawHTML = `
    <table>
        <thead>
          <tr>
            <th colspan="3">${tableColumnNumber}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th colspan="3">${tableColumnNumber}П</th>
          </tr>
        </thead>
        <tbody class="tbody-${tableColumnNumber}">
          <tr>
            <td class="table-body-number-symbol">№</td>
            <td colspan="2">Text</td>
          </tr>
        </tbody>
      </table>`
    table.insertAdjacentHTML('beforeend', rawHTML);
  },
  createRow: function (bodyNum, rowNumber) {
    const table = document.getElementsByClassName(`tbody-${bodyNum}`)[0]
    const rawHTML = `
    <tr>
      <td>${rowNumber}</td>
      <td><input type="text" /></td>
      <td><input type="text" /></td>
    </tr>`
    table.insertAdjacentHTML('beforeend', rawHTML);
  }
}

const utility = {
  checkExist: function (tableColumnNumber) {
    const tableName = document.getElementsByClassName(`tbody-${tableColumnNumber}`)[0]
    if (tableName !== undefined) {
      return true
    }
  }
}

function executeCreation() {
  for (let nameNumber = 1; nameNumber <= data.columnNameMaxCount; nameNumber++) {
    creation.createTable(nameNumber)
    data.rowNames.forEach(element => {
      creation.createRow(nameNumber, element)
    });
  }


}



const data = {
  rowNames: [1, 2, 3, 4, 12, 11, 13, 22, 21, 23, 32, 31, 33, 42, 41, 43, 52, 51, 53, 62, 61, 63, 72, 71, 73, 82, 81, 83],
  columnNameMaxCount: 8
}