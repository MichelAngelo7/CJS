function interestPerMonth(startDate){
    let now = new Date() 
    let past = new Date(startDate)
    let diff = Math.abs(now.getTime() - past.getTime())
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let month = Math.floor((days/30))
    return month
}

function addRow(){
    let relativeTo = document.getElementById("relativeTo").value
    let startDate = document.getElementById("startDate").value
    let debit = document.getElementById("debit").value
    let paid = document.getElementById("paid").value
    let difference = debit - paid
    let monetaryCorrection = 1.563203
    let correctedValue = difference * monetaryCorrection
    let interestPerMonthCalc = interestPerMonth(startDate)
    let interest = correctedValue * interestPerMonthCalc
    let finalValue = interestPerMonthCalc + interest

    table = document.getElementById("dynamicalTable")

    let rowCount = table.rows.length
    let row = table.insertRow(rowCount)
    
    row.insertCell(0).innerHTML = relativeTo
    row.insertCell(1).innerHTML = startDate
    row.insertCell(2).innerHTML = "R$   " + (parseFloat(debit).toFixed(2)).replace('.',',')
    row.insertCell(3).innerHTML = "R$   " + (parseFloat(paid).toFixed(2)).replace('.',',') 
    row.insertCell(4).innerHTML = "R$   " + (parseFloat(difference).toFixed(2)).replace('.',',')    
    row.insertCell(5).innerHTML = monetaryCorrection
    row.insertCell(6).innerHTML = "R$   " + (parseFloat(correctedValue).toFixed(2)).replace('.',',')
    row.insertCell(7).innerHTML = interestPerMonthCalc
    row.insertCell(8).innerHTML = "R$   " + (parseFloat(interest).toFixed(2)).replace('.',',')
    row.insertCell(9).innerHTML = "R$   " + (parseFloat(finalValue).toFixed(2)).replace('.',',')
    row.insertCell(10).innerHTML= '<input type="button" value="Deletar" onClick="deleteRow(this)" class="btn btn-danger">'
    }

function deleteRow(obj){
    let index = obj.parentNode.parentNode.rowIndex
    let table = document.getElementById("dynamicalTable")
    table.deleteRow(index)
}
