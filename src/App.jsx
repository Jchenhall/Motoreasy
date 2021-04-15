import Axios from 'axios';
import styles from './App.module.scss';
import React, { useState, useEffect } from "react";
import Card from './components/Card/Card.jsx';
import Pagination from './components/Pagination';

function App() {
  const [tyreList, setTyreList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredTyres, setFilteredTyres] = useState([]);
  const [sizeRange, setSizeRange] = useState(null);
  const[priceSearch, setPriceSearch]=useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);


  useEffect(() => {
    setLoading(true);
    Axios.get('http://localhost:3001/read').then((response) => {
    setTyreList(response.data);
    setLoading(false);
    console.log(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    setFilteredTyres(
    tyreList.filter((tyre) => 
    tyre.Brand.toLowerCase().includes(search.toLowerCase())
    )
   
    );
    }, [search, tyreList])
    
    useEffect(() => {
      setFilteredTyres( tyreList.filter((d) => 
    d.Price >= priceSearch)
    );
  }, [priceSearch, tyreList])

    useEffect(() => {
      setFilteredTyres( tyreList.filter((d) => 
    d.Size >= sizeRange)
    );
  }, [sizeRange, tyreList])
    

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredTyres.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


    if (loading) {
      return <p>Loading countries...</p>;
    }

  return (
  <body >
   <h1 className={styles.title}> MotorEasy Tech Test</h1>

   <nav className={styles.navBar}>
      <div className={styles.navBar__brandSearch}>
        <h2>Search for Brands</h2>
    <select onChange={e => setSearch(e.target.value)} className={styles.navBar__brandSearch__selector}>
        <option></option>
        <option className={styles.navBar__brandSearch__selector__options}>Avon</option>
        <option className={styles.navBar__brandSearch__selector__options}>Bridgestone</option>
        <option className={styles.navBar__brandSearch__selector__options}>Compass</option>
        <option className={styles.navBar__brandSearch__selector__options}>Cooper</option>
        <option className={styles.navBar__brandSearch__selector__options}>Delinte</option>
        <option className={styles.navBar__brandSearch__selector__options}>Firestone</option>
        <option className={styles.navBar__brandSearch__selector__options}>Hankook</option>
    </select>
    </div>
    <div className={styles.navBar__price}>
    <h3>Pricing</h3>
    <input type="range" className="price-range" min="45" max="130" 
       onChange={e => setPriceSearch(e.target.value)} />
      <h4>The range value is £{priceSearch}</h4>
      </div>
      <div className={styles.navBar__size}>
      <h3>Size</h3>
    <input type="range" className="size-range" min="155" max="285" 
       onChange={e => setSizeRange(e.target.value)} />
      <h4>The range value is {sizeRange}</h4>
      </div>
   </nav>


    <div className={styles.webPage}>
      {currentPosts.map((tyre, key) => (
        <Card key={key} {...tyre}  /> 
        
      ))}
    </div>

    <footer className={styles.footer}>
      < Pagination postsPerPage={postsPerPage} totalPosts={filteredTyres.length} paginate={paginate} />
    </footer>
    
    
  </body>
  );
}
// filteredTyres={filteredTyres}
export default App;
