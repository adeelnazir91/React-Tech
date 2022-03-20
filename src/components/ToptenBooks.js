import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

function ToptenBooks() {

    const [showBooks, setBooks] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const counter = { value: 1 }
    const url = 'http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2'

    const getTopBooks = async () => {

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.docs)
        setBooks(data.docs)
        setSearchApiData(data.docs)
    }

    useEffect(() => {
        getTopBooks()
    }, [])

    const handleFilter = (e) => {
        if (e.target.value == '') {
            setBooks(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setBooks(filterResult)
        }
        setFilterVal(e.target.value)
    }



    return (
        <div className="container">

            <div className="pt-3 pb-3">
                <h3>Top Ten Books</h3>
            </div>

            {showBooks ?
                <div>

                    <div className="row">
                        <div className="offset-md-8 col-md-4 mb-2">
                            <input type="search" name='search' className="form-control" value={filterVal} onInput={(e) => handleFilter(e)} placeholder='Search' />
                        </div>
                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Cover_i</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showBooks.map((showTitle, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{counter.value++}</td>
                                        <td>{showTitle.title}</td>
                                        <td>{showTitle.author_name}</td>
                                        <td>{showTitle.cover_i}</td>
                                        <td>{showTitle.first_publish_year}</td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </Table>

                </div>

                : <div><p>Please wait...</p></div>

            }

        </div>
    );
}

export default ToptenBooks;