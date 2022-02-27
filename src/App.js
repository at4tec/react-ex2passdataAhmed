import React from "react";


import React,{Component} from "react";



const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Page",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Johnson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = [
  {
    id: 1,
    name: "Planet Earth 1"
  },
  {
    id: 2,
    name: "Selma"
  },
  {
    id: 3,
    name: "Million Dollar Baby"
  },
   {
    id: 4,
    name: "Forrest Gump"
  },
   {
    id: 5,
    name: "Get Out"
  }
]

class app extends Component{
  render(){

    return(
     <>
      {movies.map(m=>
        <>
        <h3>{m.name} </h3> 
          <User/>
          </>
        )}

    </>
      
   

    )
    }
}

class User extends Component{
  render(){

    return(
        <>
        {Object.values(users).map(u=>
          <>{u.name}</>
          )}
        </>
    )
    }
}




export default app