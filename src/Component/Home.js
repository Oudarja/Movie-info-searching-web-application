import styled from "styled-components";
import MovieInfoComponent from "./MovieInfoComponent";
import MovieComponent from "./MovieComponent";
import { useState } from "react";
import axios from "axios";
export const API_KEY='d8961ff6';

const Container=styled.div`
display:flex;
flex-direction:column;
`;
const Header=styled.div`
display:flex;
flex-direction:row;
background-color:black;
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
${'' /* shadow for 
horizontal:positive->rightof box, negative left of box
verticle: positive->below box, negative-> above of box
blur radius: a larger value produces more blur
spread radius:A positive value causes the shadow to expand
               and grow larger, a negative value makes
               it shrink.

  */}
box-shadow:0 3px 6px 0 #555;
${'' /*
 box-shadow is used to add a drop shadow effect to an HTML element. 
 1) 0: The horizontal offset of the shadow. A positive value puts the 
 shadow to the right of the box, a negative value puts it to the left.

 2)3px: The vertical offset of the shadow. A positive value puts the shadow
  below the box, a negative value puts it above the box.
 
 3)6px: The blur radius of the shadow. A larger value makes the shadow more blurred.
 
 4)0: The spread radius of the shadow. A positive value makes the shadow larger in all
   directions, a negative value makes it smaller.

#555: The color of the shadow, in this case a gray color.

*/}
`;
const SearchBox=styled.div`

display:flex;
flex-direction:row;
padding:10px 10px;
background-color:white;
border-radius:6px;
margin-left:20px;
width:50%;
background-color:#685955;
align-items:center;
padding-top: 20px;
margin:5px ;
margin-left: auto;
margin-right: auto;
`;
const SearchIcon=styled.img`

width:32px;
height:32px;

`;

const SerachInput=styled.input`

color:black;
font-size:16px;
font-weight:bold;
border:none;
outline:none;
margin-left:15px;
padding: 10px;
width: 70%;
margin-left: auto;
margin-right: auto;
`;

const MovieListContainer=styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-top: 20px;
  background-color: Red; /* Green */
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;


function Home() {

  // defining state [statedefined,methodfor updating]
  const[searchQuery,updateSearchQuery]=useState();
  const[timeoutId,updateTimeoutId]=useState();

   const[movieList,updateMovieList]=useState([]);

   const[selectedMovie,onMovieSelect]=useState();


// Function for logging out
   const handleClick=()=>
   {
     // his line clears the entire local storage.
     // Local storage is a way to store data in the
     // browser that persists even after the page is
     // refreshed or the browser is closed. By clearing
     // the local storage, you're removing any data that was previously stored there.
   
      window.location.reload();
   }



  // On api call data will be fetched
  
  //  async keyword in JavaScript is used to define
  // an asynchronous function.
  // await keyword in JavaScript is used to wait for 
  //a Promise to resolve.
  //When you use the await keyword in an async 
  //function, it pauses the execution of the function
  // until the Promise on the right-hand side of the
  // await expression is resolved.
  //*** await is only used in async function

  const fetchData=async (searchString)=>
  {

   const response=await axios.get(
    `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);

    // console.log(response);
    updateMovieList(response.data.Search);
  }


//The setTimeout() function is a built-in JavaScript function
// that allows you to execute a specified function or piece of
// code after a defined delay. 
  
  const onTextChange=(event)=>
  {
     // here previous time out id is cleared. That starting with writting
     //means after 500ms api call will be done but before this if again
     // writting  is started then previous timeoutId gone deleted.That means 
     //less api call is done.
      clearTimeout(timeoutId);
      updateSearchQuery(event.target.value);
      const timeout=setTimeout(()=>fetchData(event.target.value),500);
      updateTimeoutId(timeout);
  }
  // Two way binding occurs in search input.
  /*
  Two-way binding refers to the mechanism where the value of a 
  form input element is bound to the state of the component. 
  This means that when the user interacts with the input
  (e.g., types in a value), the component's state is automatically
  updated to reflect the new value, and when the component's 
  state changes, the input value is also automatically updated.
  */

  // Debouncing is a technique used in JavaScript to limit 
  //the rate at which a function is called, in order to improve
  // performance and prevent unnecessary computations or API calls.

  return (
    <Container>
     <Header>Movie Listing App</Header>
     <Button  onClick={handleClick} >Logout</Button>

     <SearchBox>
     <SearchIcon src="/search-icon.svg"/>
     <SerachInput placeholder="Seach movie" value={searchQuery} onChange={onTextChange}/>
     </SearchBox>
     {
      /* selectedMovie variable is being passed as a 
     property to the MovieInfoComponent component. 
     */
     }
{/* If selected movie is true then movieinfo 
component will be rendered
*/}
     {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}


     <MovieListContainer>
     {/* Here ? is a optional chaing operator to check 
     null or undefined . If not so then .length is not zero if not 
     so then this will map over the movieList array and render
    a MovieComponent for each movie. */}
       {movieList?.length ? movieList.map((movie,index)=>(
        <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>     
       )):
       "No movie is Searched or found"
       }
     </MovieListContainer>
    </Container>
  );
}

export default Home;
