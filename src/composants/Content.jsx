import React from 'react'
import Accueil from './Accueil';
import Article from './Article';
import Commentaire from './Commentaire';
import Contact from './Contact';

function Content({active}) {
  switch (active) {
    case 0:
        return <Accueil/>
        break;
    case 1:
        return <Article/>
        break;
    case 2:
        return <Commentaire/>
        break;
    case 3:
        return <Contact/>
        break;
  
    default:
        break;
  }
}

export default Content
