var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started...\nlistening on port 3000');
});

router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into members(name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/users', function(req, res, next) {
    res.locals.connection.query('select * from members', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/edit', function(req, res, next) {
    res.locals.connection.query('update members set name = ''+req.body.name+'', email = ''+req.body.email+'' where id = ''+req.body.id+''', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.get('/delete', function(req, res, next) {
    res.locals.connection.query('DELETE from members where id = '+req.body.id+'', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

deleteMember(member){
    var data = {
        id: member.id
    }
    fetch("/users/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        if(data === "success"){
           this.setState({msg: "User has been deleted."});
        }
    }).catch(function(err) {
        console.log(err)
    });
}
