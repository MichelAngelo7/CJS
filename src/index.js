function addRestatement(){
    let relativeTo = document.getElementById("relativeTo").value
    let startDate = document.getElementById("startDate").value
    let debit = document.getElementById("debit").value
    let paid = document.getElementById("paid").value


    document.getElementById("showRelative").innerHTML = relativeTo

    document.getElementById("showStartDate").innerHTML = startDate

    console.log(interestPerMonth(startDate))

    document.getElementById("showDebit").innerHTML = debit

    document.getElementById("showPaid").innerHTML = paid 

    let difference = debit - paid

    document.getElementById("showDifference").innerHTML = difference

    let monetaryCorrection = 1.563203

    document.getElementById("showMonetaryCorrection").innerHTML = monetaryCorrection

    let correctedValue = difference * monetaryCorrection

    document.getElementById("showCorrectedValue").innerHTML = correctedValue

    let interestPerMonthCalc = interestPerMonth(startDate)

    document.getElementById("showInterestPerMonth").innerHTML = interestPerMonthCalc


    let interest = correctedValue * interestPerMonthCalc

    document.getElementById("showInterest").innerHTML = interest

    let finalValue = interestPerMonthCalc + interest

    document.getElementById("showFinalValue").innerHTML = finalValue
}


function interestPerMonth(startDate){
    let now = new Date() 
    let past = new Date(startDate)
    let diff = Math.abs(now.getTime() - past.getTime())
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let month = Math.floor((days/30))

    return month
}
