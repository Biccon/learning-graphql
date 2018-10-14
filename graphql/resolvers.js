import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)  
  }
};

export default resolvers;


//https://www.youtube.com/watch?v=P7NDDAfAQoo 3:50 시청중 2018.10.14 20:53