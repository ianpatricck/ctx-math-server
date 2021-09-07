const express = require('express')
const router = express.Router()

const SimpleOperations = require('./resolvers/SimpleOperations')

var simpleOperations = new SimpleOperations()

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

router

    .get('/', (req, res) => {
        res.json({
            "message": "Welcome to CTX-MATH :)"
        }).status(200)
    })

    .post('/resolve', (req, res) => {
        if (req.body.message) {

            /*
             * This method will test all conditions and return whether or not the calculation failed.
             * 
             */

            const resultContextedOperation = testOperationsStatus([
                simpleOperations.checkForSomethingGeneric(req.body.message),
                simpleOperations.basicOperationsInNumbers(req.body.message),
                simpleOperations.solveOperationsInSimpleContext(req.body.message)
            ])


            return res.json({ result: resultContextedOperation })

        }
    })

    .get('/resolve', (req, res) => {
        res.json({
            "message": "Hello :), this is the message from CTX-MATH server"
        }).status(200)
    })

module.exports = router
