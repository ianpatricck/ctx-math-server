const testOperationsStatus = (result = []) => {
    const finalResultArray = result.map((operation) => {
        if (!Number(operation) && operation == false && operation !== 0) {
            return false
        } else {
            return operation
        }
    })

    let finalResult = finalResultArray.find(element => Number(element))

    if (finalResult == undefined)
        return "Não foi possível realizar o cálculo"

    return finalResult
}

module.exports = testOperationsStatus
