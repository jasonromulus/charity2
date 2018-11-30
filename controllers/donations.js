const donation = require('../models/donation')


app.post('/charities/donations', (req, res) => {
    donation.create(req.body)
        .then(donation => {
            res.redirect(`/charities/${donation.charityId}`);
        })
        .catch((err) => {
            console.log(err.message)
        })

})

app.delete('/charities/donations/:id', function (req, res) {
    console.log('Donation deleted')
    donation.findByIdAndRemove(req.params.id)
        .then((donation) => {
            res.redirect(`/charities/${donation.charityId}`)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

module.exports = app