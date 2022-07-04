const express = require("express");
const app = express();

//routes
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
