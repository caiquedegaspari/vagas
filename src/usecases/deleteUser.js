var data =  require("../fakeData");

module.exports = function(req, res) {
    var name =  req.query.name;
    
    const userToDelete = data.find((user) => user.name === name)
    
    if (!userToDelete) {
      res.status(404).send('User to delete not found')
      return
    }

    const indexToDelete = data.indexOf(userToDelete)
    
    data.splice(indexToDelete, 1)
  
    res.send("success");
};