var expresws = require("express");
var app = express();
var fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile(__dirname + "/file.txt", "utf8", function (err, data) {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.send(data);
    }
  });
});
app.get("/id", function (req, res) {
  fs.readFile(__dirname + "returnid.txt", "utf8", function (err, data) {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.send(data);
    }
  });
});

app.get("/users", function (req, res)){
    fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
        if (err){
            res.status(500).send("error reading file");
        }
        else {
            res.send(data);

        }

        })
        
}

app.get("/users/:id", function (req, res) {
  fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      var users = JSON.parse(data);
      var user = users["user" + req.params.id];
      res.send(JSON.stringify(user));
    }
  });
});

app.post("/", function (req, res) {
  res.send("post request");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
app.delete("/", function (req, res) {
    fs.readFile(__dirname + "/file.txt", "utf8", function (err, data) {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.send(data);
        }
    }); 
});

app.put("/", function (req, res) {
        var users = JSON.parse(data);
        var id = 'users' + req.params.id;

        users[id] = req.body;
        res.end(JSON.stringify(users))
    res.send("put request");
});
