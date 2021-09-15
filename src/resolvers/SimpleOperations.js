const operations = require('../api/operations')
const genericQuestions = require('../api/genericQuestions')
const treatmentFunctions = require('./functions/TreatmentFunctions')

class SimpleOperations {

    constructor() {
        this.finalQuestion = null
    }

    /**
     * Check for a generic question, 'already implemented in the database'.
     * 
     * @param  question 
     * @returns String
     * 
     */

    checkForSomethingGeneric(question) {
        this.finalQuestion = question

        try {
            this.finalQuestion = treatmentFunctions.resolveGenericQuestions(this.finalQuestion, genericQuestions.multiplication, '*')
            this.finalQuestion = treatmentFunctions.resolveGenericQuestions(this.finalQuestion, genericQuestions.division, '/')
    
            return this.finalQuestion
        } catch {
            return false
        }
    }

    /**
     * Method for doing basic calculations without using context.
     * 
     * @param  operation
     * @returns Number || Boolean
     *  
     */

    basicOperationsInNumbers(operation) {
        try {
            return eval(operation)
        } catch {
            return false
        }
    }

    /**
     * Method that solves contextual problems and tries to bring a correct result.
     * 
     * @param  question 
     * @returns Number || Boolean
     * 
     */

    solveOperationsInSimpleContext(question) {
        this.finalQuestion = question

        try {

            this.finalQuestion = treatmentFunctions.loopForOperations(this.finalQuestion, operations.addition, '+')
            this.finalQuestion = treatmentFunctions.loopForOperations(this.finalQuestion, operations.subtraction, '-')
            this.finalQuestion = treatmentFunctions.loopForOperations(this.finalQuestion, operations.multiplication, '*')
            this.finalQuestion = treatmentFunctions.loopForOperations(this.finalQuestion, operations.division, '/')
            this.finalQuestion = treatmentFunctions.loopForOperations(this.finalQuestion, operations.potentiation, '**')

            return treatmentFunctions.checksForCharactersToBeDeleted(this.finalQuestion)

        } catch {
            return false
        }
    }
}

module.exports = SimpleOperations
