import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';



function App() {
const images = [
  {id:1, src: '../src/assets/Img/1.png', alt:''},
  {id:2, src: '../src/assets/Img/2.png', alt:''},
  {id:3, src: '../src/assets/Img/3.png', alt:''},
  {id:4, src: '../src/assets/Img/4.png', alt:''},
  {id:5, src: '../src/assets/Img/5.png', alt:''},
  {id:6, src: '../src/assets/Img/6.png', alt:''},
 
];
const genres =[
  {id:1, src: '../src/assets/1.png', alt:''},
  {id:2, src: '../src/assets/2.png', alt:''},
  {id:3, src: '../src/assets/3.png', alt:''},
  {id:4, src: '../src/assets/4.png', alt:''},
  {id:5, src: '../src/assets/5.png', alt:''},
  {id:6, src: '../src/assets/6.png', alt:''},
  {id:7, src: '../src/assets/7.png', alt:''},
  {id:8, src: '../src/assets/8.png', alt:''},
  
];

  
  const links = [
    {link:"#!", name:"Home"},
    {link:'#!', name:"TV Shows"},
    {link:'#!', name:"Movies"},
    {link:'#!', name:"Series"}
  ]
  return (
 <React.Fragment>
 <Header links={links}  />
 <Main images={images}  genres={genres} />
 <Footer/>
 </React.Fragment>
  )
}

export default App
