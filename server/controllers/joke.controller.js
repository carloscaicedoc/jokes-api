// OPTION 1
const { Joke } = require("./../models/joke.model");

// OPTION 2
// const Pet = require("./../models/pet.model")

// ~~~~~~~~~ CRUD ~~~~~~~~~~ //

// Get all
module.exports.allJokes = (req, res) => {
  Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
};

// Get one 

// option 1
module.exports.oneJoke = (req, res) => {
  const id = req.params.id
  Joke.findOne({ _id: id })
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// option 2 
module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Create 

// option1
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

// option 2
module.exports.createJoke2 = (req, res) => {
  const newJoke = new Joke(req.body)
  newJoke.save()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

// Update
module.exports.updateJoke = (req, res) => {
  const id = req.params.id
  Joke.findOneAndUpdate(
    { _id: id }, req.body, { new: true, runValidators: true }
  )
    .then(response => res.json(response))
    .catch(err => res.json(err))

}

// Delete
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => res.json(err))
}