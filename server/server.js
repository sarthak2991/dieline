const express = require('express')
const cors = require('cors')
const {dieline, nesting,generatekeylinepdf, generateNesting} = require('./functions')
const app = express()




app.use(cors())
app.use(express.json())

app.post('/',dieline)

app.post('/nesting',nesting)

app.post('/generate-keyline-pdf',generatekeylinepdf)

app.post('/generate-nesting-pdf',generateNesting)

app.listen(5000)