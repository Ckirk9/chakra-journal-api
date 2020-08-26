const db = require('../models')

const index = (req, res) => {
    const userName = req.params.userName;
    console.log('Req params: ', req.params);
    db.Entry.find({ user: userName }, (err, foundEntries) => {
        if (err) console.log('Error in entries#index:', err)

        if(!foundEntries.length) return res.json({
            message: 'No saved entries'
        })

        res.json({ entries: foundEntries})
    })
}

const show = (req, res) => {
    db.Entry.findById(req.params.id, (err, foundEntry) => {
        if (err) console.log('error in entry show:', err)
        if (!foundEntry) return res.json({
            message: "no entry found by that ID"
        })
        res.json({ entry: foundEntry})
    })
}

const create = (req, res) => {
    db.Entry.create(req.body, (err, savedEntry) => {
        if (err) console.log('error in user create:', err)
        res.json({ entry: savedEntry})
    })
}

const update = (req, res) => {
    db.Entry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedEntry) => {
        if (err) console.log('error in update entry:', err)
        res.json({
            entry: updatedEntry, 
            message: `${updatedEntry.date} was updated successfully`
        })
    })
}

const destroy = (req, res) => {
    db.Entry.findByIdAndDelete(req.params.id, (err, deletedEntry) => {
        if (err) console.log('error in entry delete:', err)
        res.json({
            message: `Entry was deleted`
        })
    })
}

module.exports = { 
    index,
    show,
    create,
    update, 
    destroy
}