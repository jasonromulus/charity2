const Donation = require('../models/donation');

module.exports = (app) => {
app.post('/charities/donations', (req, res) => {
    Donation.create(req.body)
        .then(donation => {
            res.redirect(`/charities/${donation.charityId}`);
        })
        .catch((err) => {
            console.log(err.message)
        })

})

app.delete('/charities/donations/:id', function (req, res) {
    console.log('Donation deleted')
    Donation.findByIdAndRemove(req.params.id)
        .then((donation) => {
            res.redirect(`/charities/${donation.charityId}`)
        })
        .catch((err) => {
            console.log(err.message)
        })
})
}