import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

function ToptenBooks() {

    const [showBooks, setBooks] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [PosterPerPage] = useState(10)

    const counter = { value: 1 }
    const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2'

    const getTopBooks = async () => {

        await fetch(url).then((resp) => {
            resp.json().then((result => {
                console.log(result)
                setBooks(result.docs)
                setSearchApiData(result.docs)
            }))
        })

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

    const IndexofLastPost = currentPage * PosterPerPage
    const Indexof1stPage = IndexofLastPost - PosterPerPage
    const currentposts = showBooks.slice(Indexof1stPage, IndexofLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)

    }

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const totalpost = showBooks.length

    const pageperNumber = []

    for (let i = 1; i <= Math.ceil(totalpost / PosterPerPage); i++) {
        pageperNumber.push(i)
    }


    return (
        <div className="container">

            <div className="pt-3 pb-3">
                <h3>Top Ten Books</h3>
            </div>

            {currentposts ?
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
                            {currentposts.map((showTitle, index) => {
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

            <div>
                <nav className='text-center d-inline-block '>
                    <ul className='pagination'>
                        {
                            pageperNumber.map((num, index) => {
                                return (
                                    <li className={activeIndex === index ? "active page-item" : "unactive page-item"} onClick={() => handleOnClick(index)} key={index}>
                                        <a href='#javascript' onClick={() => paginate(num)} className="page-link">{num}</a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default ToptenBooks;