import React from 'react'
import Accueil from "./Accueil";
import Categorie from "./categorie";
import Courses from "./Courses";
import SearchBar from './searchBar';
import Story from './story';
import Overview from './overview';
import Subscribe from './subscribe';
import Sponsors  from './sponsors';
const Section = () => {
  return (
    <div  className='py-4' style={{marginTop : "50px"}}>
      <Accueil></Accueil>
      <SearchBar/>
      <Categorie></Categorie>
      <Courses></Courses>
      <Story></Story>
      <Overview></Overview>
      <Subscribe></Subscribe>
      <Sponsors></Sponsors>
    </div>
  )
}

export default Section