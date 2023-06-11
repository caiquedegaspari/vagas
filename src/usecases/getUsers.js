var data =  require("../fakeData");

const allGetUserResults = []

const getUser = (req, res) => {    
    const name =  req.query.name;

    const foundUser = data.find((user) => user.name === name)
    if (!foundUser) {
        res.status(404).send('User not found')
        return
    }
    allGetUserResults.push(foundUser)
    res.send(foundUser)
};

const getUsers = (_, res) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers,
    allGetUserResults
};