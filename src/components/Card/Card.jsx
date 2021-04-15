import React from 'react';
import styles from './Card.module.scss';
const  Card = (props) => {
 

 const { Brand, Title, Size, Price, Image } = props;
 

// const Brand = tyreList.map(tyreList => tyreList.Brand)
// const Title = tyreList.map(tyreList => tyreList.Title)
// const Size = tyreList.map(tyreList => tyreList.Size)
// // const Price = tyreList.map(tyreList => tyreList.Price)
// console.log(Brand)



   
return ( 
    <div className={styles.Card}> 
        <h1 className={styles.Card__Brand}>{Brand}</h1> 
        <br/>
        <ul className={styles.Card__List}>
          <label className={styles.Card__List__Label}>Title</label>
          <li className={styles.Card__List__Item}>{Title}</li>
          <label className={styles.Card__List__Label}>Tire Size</label>
          <li className={styles.Card__List__Item}>{Size}</li>
          <label className={styles.Card__List__Label}>Tire Price</label>
          <li className={styles.Card__List__Item}>£{Price}</li>
        </ul>
        <img src={Image} className={styles.Card__Image}/>
    </div>     
 );
  
}

// {tyreList.map((val, index) => {
// return
export default Card;





