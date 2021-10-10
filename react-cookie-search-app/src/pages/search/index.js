import React, { useState } from 'react';
import { GetLocalStorageData } from 'global/Local-Storage-Helper';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchForm from 'components/search/SearchForm';
import styles from 'styles/Search.module.css';
import Button from '@mui/material/Button';
import { LocalStoreList } from 'global/Local-Storage-Helper';

export default function Search() {
    let newDate = new Date()
    let date = newDate.getDate();   
    
    const [searchHistory, setSearchHistory] = useState(GetLocalStorageData('SearchHist'));
    const [searchTerm, setSearchTerm] = useState('');

    const maxItems = 6;
    
    const handleAddToList = (event) => {       
        setSearchHistory(GetLocalStorageData('SearchHist'));
    }
        
    const handleChangeSearchTerm = (event) => {    
        setSearchTerm(event.target.value);    
    }
    
    const handleSubmit = (event) => {
        console.log(event);
        // const maxListItemCount = 7;
        var maxDaysOld = 3;
      
        LocalStoreList('SearchHist', searchTerm, maxDaysOld);
        handleAddToList();
    }

    const handleClickOnLink = (val) => {       
        console.log(val);
        setSearchTerm(val);
    }
        
    return (
        <div className={styles.searchForm}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3} xl={2}> </Grid>
                    <Grid item xs={12} lg={9} xl={10}>
                        <Grid container spacing={2}>
                        
                            <Grid item xs={10} lg={10} xl={10}>
                               <SearchForm handleAddToList={handleAddToList} 
                                           handleChangeSearchTerm={handleChangeSearchTerm} 
                                           handleSubmit={handleSubmit}
                                           searchTerm={searchTerm}/>
                            </Grid>
                            <Grid item xs={10} lg={10} xl={10}>
                                <ul>
                                {searchHistory.map((element) =>                                   
                                <li><Button variant="text" onClick={(e) => handleClickOnLink(element.value)}>{element.value} - {element.date}</Button> </li>
                                )}  
                                </ul>                                                                  
                            </Grid>
                        </Grid>    
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
