/**
 * Loop function responsible for translating 
 * the expressions described in mathematical language.
 * 
 * @param currentQuestion 
 * @param keyWords 
 * @param operation 
 * @returns String
 * 
 */

const loopForOperations = (currentQuestion, keyWords, operation) => {
    var finalFormat

    keyWords.forEach((key) => {
        if (currentQuestion.toLowerCase().includes(key))
            currentQuestion = currentQuestion.replace(new RegExp(key, 'gi'), operation)

        finalFormat = currentQuestion
    })

    return finalFormat
}

/**
 * Function to check if there is something to be 
 * ignored by the expression.
 * 
 * @param questionToBeTraited
 * @returns Number
 * 
 */

const checksForCharactersToBeDeleted = (questionToBeTraited) => {

    let charactersToDelete = [
        'd', 'a', 'por', 'e', 'r'
    ]

    charactersToDelete.forEach(element => {
        if (questionToBeTraited.includes(element)) {
            questionToBeTraited = questionToBeTraited.replace(element, '')
        }
    })

    return eval(questionToBeTraited)
}

/**
 * Resolve the generic question and return some value
 * 
 * @param questionToBeTraited
 * @param generics
 * @param operation
 * @returns Number || String
 * 
 */

const resolveGenericQuestions = (question, generics, operation) => {
    let questionToBeTraited = false
    
    try {
        generics.forEach(element => {
            if (question.includes(element)) {
                questionToBeTraited = question
            }
        })

        let numbers = questionToBeTraited.split(' e ')
        let values = [numbers[0].replace(/[^0-9]/g, ''), numbers[1].replace(/[^0-9]/g, '')]
        
        values = values.map(elem => parseInt(elem))

        let result
        
        result = operation == '*' ? values[0] * values[1] : result
        result = operation == '/' ? values[0] / values[1] : result
        
        return eval(result)
    } catch {
        return question
    }
}

module.exports = {
    loopForOperations,
    checksForCharactersToBeDeleted,
    resolveGenericQuestions
}
