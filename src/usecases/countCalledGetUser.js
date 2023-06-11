const { allGetUserResults } = require("./getUsers");


module.exports = function(req, res){
    const name =  req.query.name;

    if (!name) {
        res.send('Missing param')
        return
    }

    const calledGetUser = allGetUserResults.filter((user) => user.name === name)

    res.send(`Usuário ${name} foi lido ${calledGetUser.length} vezes.`);

};