import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'


function ShowArticles(props) {
    const [items, setItems] = useState('');
    const [pagecount, setPageCount] = useState(0);

    useEffect(() => {

        const getArticle = async () => {
            const res = await fetch(`https://content-store.explore.bfi.digital/api/articles?page=1&size=10`);
            const data = await res.json();
            const total = res.headers.get('x-total-count');
            setPageCount(total / 10)
            console.log(total / 10);
            setItems(data);

        };

        getArticle();

    }, [])

    console.log(items)

    const fetchArticle = async (currentPage) => {
        const res = await fetch(`https://content-store.explore.bfi.digital/api/articles?page=${currentPage}&size=10`);
        const data = await res.json();
        return data;
    };


    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1

        const articleFromServer = await fetchArticle(currentPage)

        setItems(articleFromServer)

        console.log(data.selected);
    }



    return (
        <div className='container'>

            <div className='pt-3 pb-3'><h2>Articles</h2></div>
            <div className="row">

                {items ? items.data.map((item) => {
                    return (

                        <div className="col-sm-6 mb-3">
                            <div className="card mb-2">
                                <div className="card-body text-start">
                                    <h5 className="card-title" key={item.id}>{item.title}</h5>
                                    <p className="card-text">{item.summary}</p>
                                    {item.authors ? item.authors.map(Showauthor => {
                                        return (
                                            <h5 className='pb-2'>{Showauthor.name}</h5>
                                        )
                                    }) : <h5>No Author</h5>}
                                    {item.category ?
                                        <div className='float-start text-start'>
                                            <a href="javascript:void(0)" className="btn btn-primary">
                                                {item.category.name}
                                            </a>
                                        </div>

                                        : <div className='float-start text-start'><a href='javascript:void(0)' className="btn btn-primary">No Category</a></div>

                                    }
                                    <div className='float-end text-end pt-2'><h5 className="card-title">{item.created}</h5></div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <div className='text-center'><h3>No data found</h3></div>
                }

            </div>

            <div className='mt-2 pt-2'>
                <ReactPaginate

                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}


                />

            </div>
        </div>
    );
}

export default ShowArticles;