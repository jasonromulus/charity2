const charity = require('../models/charity')
const donation = require('../models/donation')

app.get('/', (req, res) => {
    charity.find()
    .then(charities => {
        res.render('charities-index', {charities: charities});
    })
    .catch(err => {
        console.log(err);
    });
});

// NEW
app.get('/charities/new', (req, res) => {
    res.render('charities-new', {});
})

// CREATE
app.post('/charities', (req, res) => {
    charity.create(req.body)
        .then((charity) => {
            console.log(charity)
            res.redirect(`/charities/${charity.id}`)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

// SHOW
app.get('/charities/:id', (req, res) => {
    charity.findById(req.params.id)
        .then((charity) => {
            donation.find({ charityId: req.params.id})
                .then(donations => {
                    res.render('charities-show', {charity: charity, donations: donations})
                })
            })
        .catch((err) => {
            console.log(err.message)
    })
})

// EDIT
app.get('/charities/:id/edit', (req, res) => {
    charity.findById(req.params.id, function(err, charity) {
        res.render('charities-edit', {charity: charity})
    })
})

// UPDATE
app.put('/charities/:id', (req, res) => {
    charity.findByIdAndUpdate(req.params.id, req.body)
        .then(charity => {
            res.redirect(`/charities/${charity._id}`)
        })
        .catch(err => {
            console.log(err.message)
        })
})

// DELETE
app.delete('/charities/:id', function(req, res) {
    console.log('Charity deleted')
    charity.findByIdAndRemove(req.params.id).then((charity) => {
        res.redirect('/')
    }).catch((err => {
        console.log(err.message)
    }))
})

module.exports = app
