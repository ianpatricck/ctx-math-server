const express = require('express')
const cors = require('cors')

const testOperationsStatus = require('./testOperationsStatus')
const SimpleOperations = require('./resolvers/SimpleOperations')

const app = express()
var simpleOperations = new SimpleOperations()
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "message": "Welcome to CTX-MATH :)"
    }).status(200)
})

router.post('/resolve', (req, res) => {
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

router.get('/resolve', (req, res) => {
    res.json({
        "message": "Hello :), this is the message from CTX-MATH server"
    }).status(200)
})

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.PORT || 8000)
