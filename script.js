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
        
        <tbody class="tbody-${tableColumnNumber}">
          <tr>
            <td class="table-body-number-symbol">№</td>
            <td colspan="2">${tableColumnNumber}П</td>
          </tr>
        </tbody>
      </table>
      `
    table.insertAdjacentHTML('beforeend', rawHTML)
  },
  createRow: function (bodyNum, rowNumber) {
    const table = document.getElementsByClassName(`tbody-${bodyNum}`)[0]
    const rawHTML = `
    <tr>
      <td>${rowNumber}</td>
      <td><input type="text" class='input-1'/></td>
      <td><input type="text" class='input-2'/></td>
    </tr>    
    `
    table.insertAdjacentHTML('beforeend', rawHTML)
  },
  createTables: function (rowNames, isRow) {
    for (
      let nameNumber = data.columnNameMaxCount;
      nameNumber >= data.columnNameInitCount;
      nameNumber--
    ) {
      if (!isRow) {
        creation.createTable(nameNumber)
      }
      rowNames.forEach(element => {
        creation.createRow(nameNumber, element)
      })
    }
  }
}

const utility = {
  checkExist: function (tableColumnNumber) {
    const tableName = document.getElementsByClassName(
      `tbody-${tableColumnNumber}`
    )[0]
    if (tableName !== undefined) {
      return true
    }
  }
}

const listners = {
  addRow: function () {
    const button = document
      .getElementsByClassName('add-row-btn')[0]
      .addEventListener('click', function () {
        const rowNumbers = data.rowGroup()
        if (data.rowCount === 9) {
          return
        }
        creation.createTables(rowNumbers, true)
        data.rowCount += 1
      })
  }
}

listners.addRow()

const data = {
  rowGroup: function () {
    const arr = [
      `${this.rowCount}${2}`,
      `${this.rowCount}${1}`,
      `${this.rowCount}${3}`
    ]
    return arr
  },
  rowNames: [1, 2, 3, 4, 12, 11, 13, 22, 21, 23, 32, 31, 33],
  columnNameMaxCount: 8,
  columnNameInitCount: 1,
  rowInitCount: 3,
  rowCount: 4
}

creation.createTables(data.rowNames, false)
data.rowGroup()

console.log(document.getElementsByTagName('svg'))

const visualAdjustments = {
  animateWidthInput: function () {
    const inputs = document.getElementsByTagName('input')

    Array.from(inputs).forEach(input => {
      input.addEventListener('input', function (event) {
        input.style.width = 5 + event.currentTarget.value.length / 3.6 + 'rem'
      })
      // input.addEventListener('focusout', function () {
      //   input.style.width = 90 + '%'
      // })
    })
  }
}

visualAdjustments.animateWidthInput()
