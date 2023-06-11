var data =  require("../fakeData");

module.exports =  function(req, res) {
    const id =  req.query.id;
    const { name, job } = req.body

    const userToUpdate = data.find(user => user.id == id);
    
    if (!userToUpdate) {
        res.status(404).send('user not found')
        return;
    }

    userToUpdate.name = name;
    userToUpdate.job = job;

    res.send(userToUpdate);

};