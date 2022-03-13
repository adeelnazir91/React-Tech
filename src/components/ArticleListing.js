import React, { Component } from 'react';

class ArticleListing extends Component {

    constructor() {
        super()
        this.state = {
            articleList: '',

        }
    }

    componentDidMount() {
        fetch('https://content-store.explore.bfi.digital/api/articles').then(resp => {
            resp.json().then(result => {
                console.log(result)
                this.setState({
                    articleList: result.data
                })

            })
        })
    }


    render() {
        //  console.log(this.state.articleList)
        return (

            <div className='container'>
                <h1>Article Listing</h1>
                {this.state.articleList ?
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.articleList.map(ShowArticleListData => {

                                return (
                                    <tr>
                                        <td>{ShowArticleListData.title}</td>

                                        {
                                            ShowArticleListData.category ?

                                                <td>{ShowArticleListData.category.name}</td>
                                                : <td>No Category</td>
                                        }


                                        {ShowArticleListData.authors ? ShowArticleListData.authors.map(ShowAuthor => {

                                            return (

                                                <td>{ShowAuthor.name}</td>

                                            )

                                        }) : <td>No Author</td>}

                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                    :
                    <div>Please wait...</div>

                }

            </div>
        );
    }
}

export default ArticleListing;