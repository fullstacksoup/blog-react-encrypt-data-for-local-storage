import { AESEncrypt, AESDecrypt } from 'global/Crypto-Helper';
import { differenceInDays } from 'date-fns';

export function LocalStoreList(localSessionName, value, maxDaysOld) {    
    var localStorageData = localStorage.getItem(localSessionName);        
    var today = new Date();
    
    const cDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    if(localStorageData == null) {        
        var data = [{value: value, date: cDate}]
        var dataArr = [];
        dataArr.push(data);
        localStorageData = localStorage.setItem(localSessionName,  AESEncrypt(data));             
    }
    else {           
        
        var newDataArr = [];
        let dataArr = AESDecrypt(localStorage.getItem(localSessionName));      
        
        dataArr.forEach(element => {            
            let recordDate = new Date(element.date);           
            var daysDiff = differenceInDays(today, recordDate,  { addSuffix: false })
    
            if(daysDiff <= maxDaysOld) {
                newDataArr.push(element);    
            }                        
        });        
        
        newDataArr.push({value: value, date: cDate});        
        localStorage.setItem(localSessionName, AESEncrypt(newDataArr));                                                      
            
        return newDataArr;  
    }
}



export function GetLocalStorageData(localSessionName) {    
    var data = localStorage.getItem(localSessionName);        
    let array = [];
    
    if(data == null) {
        return array;
    }
    else {   
        const lastSearch = AESDecrypt(data);                 
        return lastSearch;  
    }
}
