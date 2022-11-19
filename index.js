const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const { buildSchema } = require('graphql');
const { courses } = require('./data.json');

const schema = buildSchema(`
    type Query {
        message: String
        course(id: Int!): Course
        courses(topic: String): [Course] 
    }
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }
    type Course {
        id: Int
        tittle: String
        topic: String
        url: String
    }
`);

const getCourse = (args) => {
    const { id } = args;
    return courses.filter( course => course.id === id)[0];
}
const getCourses = (args) => {
    const { topic } = args;
    if ( !!topic ) return courses.filter( course => course.topic === topic);
    return courses;
}
const updateCourseTopic = ( {id, topic}) => {
    courses.map( course => {
        if (course.id === id ){
            course. topic = topic
            return course;
        };
    })
    return courses.filter( course => course.id === id)[0];
}
const root = {
    message: () => "hola mundo",
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
}
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}) )

app.listen(3000, () => console.log("Server starterd on port 3000"));

