import React from 'react'
import styled from "styled-components";

const MovieContainer=styled.div`

display:flex;
flex-direction:column;
padding:10px;
width:280px;
box-shadow:0 3px 10px 0 #aaa;

cursor: pointer;
`;

const CoverImage=styled.img`

height:362px;
${''
 /* object-fit is a CSS property that specifies how the 
content of a replaced element, such as an <img> or <video> 
element, should be resized to fit its container. */
}

object-fit:cover;

`;

// <span> tag to apply specific styles to a portion of
// text within a larger block of content.
// Unlike the <div> tag, which is a block-level 
//element, the <span> tag is an inline-level
// element, meaning it only takes up the space
// it needs and does not create a new line. This 
//makes it useful for applying styles or functionality
// to a specific portion of text within a larger block 
//of content.


const MovieName=styled.span`
font-size:18px;
font-weight:600;
color:black;
${'' /* 15px is for top and bottom and 0 is for left and right */}
margin:15px 0;
${'' /* he value nowrap prevents the text from wrapping to the next line, causing it to overflow its container. */}
white-space:nowrap;
${'' /* The value ellipsis displays an ellipsis (...) at 
the end of the visible text when the text overflows its 
container. */}
text-overflow:ellipsis;
overflow:hidden;
`;

const InfoColumn=styled.div`
display:flex;
flex-direction:row;
${'' /* justify-content: space-between; is a CSS property 
used in flexbox layouts to align items along the main axis
 with equal space between them. When applied to a flex
container, it distributes the flex items such that there is
space between each item, pushing them as far apart as possible
while still respecting the container's boundaries. */}
justify-content:space-between;
`;

const MovieInfo=styled.span`
 
 font-size:16px;
 font-weight:500;
 color:black;
 text-transform:capitalize;

`;


const MovieComponent = (props) => 
{
  const{Title,Year,imdbID,Type,Poster}=props.movie;

  return (
    // When any body click on the movie container 
    //then the corresponding func will be called
    <MovieContainer onClick={()=>
    {
      props.onMovieSelect(imdbID);
    }
    }>
      <CoverImage src={Poster}/>
    <MovieName>{Title}</MovieName>
    <InfoColumn>
    {/* Here infoColumn is a div and from this space of block just 
    using span a limited  */}
     <MovieInfo>Year: {Year}</MovieInfo>
     <MovieInfo>Type: {Type}</MovieInfo>

    </InfoColumn>
    
    
    </MovieContainer>
  )
}

export default MovieComponent
