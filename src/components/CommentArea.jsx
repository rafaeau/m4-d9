import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {

    state = {
        comments: [], // comments will go here
        isLoading: false,
        isError: false
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.asin !== this.props.asin) {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDE4MjIyMjQsImV4cCI6MTY0MzAzMTgyNH0.FhBfi1iCANr52V4vFI9jP1bs_nduCbOa8Ym3h3DfF6Q'
                    }
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                    this.setState({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    this.setState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                this.setState({ isLoading: false, isError: true })
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin} />
                <CommentList commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea
