function interestPerMonth(startDate){
    let now = new Date() 
    let past = new Date(startDate)
    let diff = Math.abs(now.getTime() - past.getTime())
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let month = Math.floor((days/30))
    return month
}

function formatDateToPtBr(startDate){
    let data = new Date(startDate)
        day = data.getDate().toString().padStart(2, '0')
        month = (data.getMonth()+1).toString().padStart(2, '0')
        year = data.getFullYear()

    return  month + "/" + year 

}

function addRow(){
    let relativeTo = document.getElementById("relativeTo").value
    let startDate = document.getElementById("startDate").value
    let debit = document.getElementById("debit").value
    debit = parseFloat(debit.toString().replace(',','.'))
    let paid = document.getElementById("paid").value
    paid = paid ? paid : 0
    paid = parseFloat(paid.toString().replace(',','.'))
    let difference = debit - paid
    let monetaryCorrection = 1.0673379 
    let correctedValue = difference * monetaryCorrection
    let interestPerMonthCalc = interestPerMonth(startDate)
    let interest = correctedValue * (interestPerMonthCalc)/100
    let finalValue = correctedValue + interest

    table = document.getElementById("dynamicalTable")

    let rowCount = table.rows.length
    let row = table.insertRow(rowCount)
    
    row.insertCell(0).innerHTML = relativeTo
    row.insertCell(1).innerHTML = formatDateToPtBr(startDate) 
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


function exportTableToExcel(tableID, filename=''){
    let downloadLink;
    let dataType = 'application/vnd.ms-excel'
    let tableSelect = document.getElementById(tableID)
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20')

    filename = filename ? filename + '.xls' : 'excel_data.xls'

    downloadLink =  document.createElement("a")

    document.body.appendChild(downloadLink)

    if(navigator.msSaveOrOpenBloob){
        let blob = new Blob(['\ufeff', tableHTML],{
            type: dataType
        })
        navigator.msSaveOrOpenBlob(blob, filename)
    }else{
        downloadLink.href = 'data:' + dataType + ', '+ tableHTML
   

    downloadLink.download = filename

    downloadLink.click()

    }
    
}



