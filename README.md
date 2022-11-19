# graphql-server
Querys examples
query getQuery( $courseId: Int!, $topicSearch: String  ){
  course(id: $courseId){
    id,
    topic
  }
  courses(topic: $topicSearch){
    id,
  }
}
query getTopic( $topicSearch: String,  ){
  courses(topic: $topicSearch){
    id,
  } 
}

query getCoursesWithFragments( $courseId: Int!, $courseId2: Int! ){
  coruse1: course(id: $courseId){
    ...courseFields
  }
  course2: course(id: $courseId2){
    ...courseFields
  }
}
fragment courseFields on Course {
  tittle
  topic
}
Mutation examples
mutation updateCourse($courseId: Int!, $topicSearch: String!,) {
  updateCourseTopic(id: $courseId, topic: $topicSearch){
    ...courseFields
  }
}