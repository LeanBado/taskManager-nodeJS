
const notFound = (req, res) => {
    return res.status(404).send('Route doesnt exist')
}

module.exports = notFound