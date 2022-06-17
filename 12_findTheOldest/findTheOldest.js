const findTheOldest = function (persons) {
    return persons.reduce((oldest, person) => {
        if (person.yearOfDeath === undefined) person.yearOfDeath = new Date().getFullYear()
        return oldest.yearOfDeath - oldest.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? oldest : person
    }, { yearOfDeath: 0, yearOfBirth: 0 })
};

// Do not edit below this line
module.exports = findTheOldest;
