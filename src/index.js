function addRestatement(){
    let relativeTo = document.getElementById("relativeTo").value
    let startDate = document.getElementById("startDate").value
    let debit = document.getElementById("debit").value
    let paid = document.getElementById("paid").value


    document.getElementById("showRelative").innerHTML = relativeTo

    document.getElementById("showStartDate").innerHTML = startDate

        document.getElementById("showDebit").innerHTML = debit

    document.getElementById("showPaid").innerHTML = paid 

}
