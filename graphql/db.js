export const people = [
  {
    id: 1,
    name: "Biccon",
    age: 23,
    gender: "male"
  },
  {
    id: 2,
    name: "haha",
    age: 1,
    gender: "female"
  },
  {
    id: 3,
    name: "dfe",
    age: 3,
    gender: "female"
  },
  {
    id: 4,
    name: "abc",
    age: 66,
    gender: "female"
  },
  {
    id: 5,
    name: "fucker",
    age: 22,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
