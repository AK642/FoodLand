import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';
import './scss/Search.scss';



// Search Code...................

export default function CustomizedInputBase() {
  return (
    

    <div className="content">
    <div component="form" className="root">
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      
      <InputBase
        className="input"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <IconButton className="iconButton" aria-label="search">
        <SearchIcon />
      </IconButton>
      
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
      {/* <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        Search
      </IconButton> */}
      {/* <Button type="submit" variant="contained" color="secondary" className="button">
        SEARCH
      </Button> */}
    </div>
    </div>
  );
}

// Header Code.....................

// import React from 'react';
// import './scss/Header.scss';
// import logo from './img/FoodLand_LOGO.png';
// import Search from './Search';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import BookIcon from '@material-ui/icons/Book';


// function Header() {
//     return (
//         <div className="header">
//             <div className="header__content">
//                 <React.Fragment>
//                     <Grid item xs={4} className="search">
//                         <Search />
//                     </Grid>
//                     <Grid item xs={4} className="logo">
//                         <img src={logo} alt="FoodLand"></img>
//                     </Grid>
//                     <Grid item xs={4} className="icons">
//                         <div className="header__icon">
//                             <PersonOutlineIcon/>
//                         </div>
//                         <div className="header__icon">
//                             <BookIcon />
//                             <div className="wish__quantity">
//                                 0
//                             </div>
//                         </div>
//                         <div className="header__icon">
//                             <ShoppingCartIcon />
//                             <div className="cart__quantity">
//                                 0
//                             </div>
//                         </div>
//                     </Grid>
//                 </React.Fragment>
//             </div>
//         </div>
//     )
// }

// export default Header