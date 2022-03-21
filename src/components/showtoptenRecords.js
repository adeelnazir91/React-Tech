import React, { useEffect, useState } from 'react'

function BasicSearch() {

 const[searchtopRecord, setSearchTopRecord] = useState('');
 const [filterVal, setFilterVal] = useState([])


 const url = 'http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2'

 useEffect(()=>{
    fetch(url).then((resp) =>{
       resp.json().then((result) =>{
          console.log(result)
          setSearchTopRecord(result)   
       })
    })
 },[])

 console.log("my search result", searchtopRecord)

 const handleSearch = (e) =>{
   if(e.target.value == ''){
    

   }else{
      const filterResult = searchtopRecord.docs.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))  
      console.log("My filter data",filterResult) 
   }

  
 }
 



    return (
         <div className='container'>

          <div className='row pt-3'>
             <div className='col-md-4 offset-md-8'>
            <form>
               <input type="search" className='form-control' name='search' onChange={(e)=>handleSearch(e)} placeholder='search'/>
            </form>

            </div>
            </div>
         </div>
    )
  }

  export default BasicSearch
  