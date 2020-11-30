import React, { memo, useRef } from 'react';
import styles from './searchbox.module.css';

const SearchBox = memo(
  ({onSearch}) => {

    const inputRef = useRef();
  
    const handleSearch = () => {
      
      const value = inputRef.current.value;
      onSearch(value);
      //console.log(value);
    }
    const onClick= () => {
      handleSearch();
    }
  
    const onKeyPress= (event) => {
      if(event.key === 'Enter')
      {
        handleSearch();
      }
    }
    return (
      <header className={styles.header}>
        <div className={styles.log}>
          <img className={styles.img} src="/images/youtube_001.ico" alt="logo"/>
        </div>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
        <button className={styles.button} type="submit" onClick={onClick}>
          <img className={styles.buttonImg} src="/images/search.png" alt="logo"/>
        </button>
      </header>
    )
  
  }
)
   
export default SearchBox;