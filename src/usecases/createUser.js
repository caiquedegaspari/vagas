var data =  require("../fakeData");

module.exports = function(req, res){
  
    const { name, job } =  req.body;

    const newUser = {
        id: data.length + 1,
        name,
        job,
    }

    data.push(newUser)
    
    res.send(newUser);

};