var express = require('express')
var app = express()

var port = 3001

app.get('/', function (req, res, next) {
  console.log("== GET /")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  // console.log("  -- req.headers:", req.headers)

  res.status(200).sendFile(__dirname + '/public/index.html')
})

app.get('/people', function (req, res, next) {
  console.log("== GET /")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  // console.log("  -- req.headers:", req.headers)

  res.status(200).sendFile(__dirname + '/public/people.html')
})

app.get('/cats', function (req, res, next) {
  console.log("== GET /cats")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  // console.log("  -- req.headers:", req.headers)

  var responseBody = "<html>"
  responseBody += "<head>"
  responseBody += "</head>"
  responseBody += "<body>"
  responseBody += "<h1>All the cats!</h1>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=2'/></div>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=3'/></div>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=4'/></div>"
  responseBody += "</body>"
  responseBody += "</html>"

  res.status(200).send(responseBody)
})

app.get('/morecats', function (req, res, next) {
  console.log("== GET /morecats")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  // console.log("  -- req.headers:", req.headers)

  var responseBody = "<html>"
  responseBody += "<head>"
  responseBody += "</head>"
  responseBody += "<body>"
  responseBody += "<h1>Even more cats!</h1>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=5'/></div>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=6'/></div>"
  responseBody += "<div><img src='http://placekitten.com/480/480?image=7'/></div>"
  responseBody += "</body>"
  responseBody += "</html>"

  res.status(200).send(responseBody)
})

app.get('/people/:person', function (req, res, next) {
  console.log("== GET /morecats")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  console.log("  -- req.params:", req.params)
  next()
})

app.get('*', function (req, res, next) {
  console.log("== 404")
  console.log("  -- req.url:", req.url)
  console.log("  -- req.method:", req.method)
  // console.log("  -- req.headers:", req.headers)

  res.status(404).sendFile(__dirname + '/public/404.html')
})

// app.post()
// app.delete()
// app.put()

app.listen(port, function () {
  console.log("== Server is listening on port", port)
})
