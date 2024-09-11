const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
    
    return people.reduce((oldest, person) => {
      const deathYear = person.yearOfDeath || currentYear;
      const age = deathYear - person.yearOfBirth;
      
      if (!oldest || age > (oldest.deathYear - oldest.yearOfBirth)) {
        return { ...person, deathYear };
      }
      return oldest;
    }, null);
  };

// Do not edit below this line
module.exports = findTheOldest;
