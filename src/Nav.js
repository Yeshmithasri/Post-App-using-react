import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import DataContext from './context/dataContext';


const Nav = () => {
  const {search,setSearch} =useContext(DataContext)

  return (
    <>
    <nav className='navbar'>
      <form className='searchform' onSubmit={(e)=> e.preventDefault()}>
          <label>Search Posts</label>
          <input id='search' type='text' placeholder='Search Posts' value={search} 
          onChange={(e)=> setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Post/NewPost'>Post</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
    </nav>
    </>
    
  )
}

export default Nav