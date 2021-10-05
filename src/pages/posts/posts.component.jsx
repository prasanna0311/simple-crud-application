import React from 'react';
import { Provider } from 'react-redux';
import AllPosts from '../../components/all-posts/all-posts.component';
import { store, SETALLPOSTS } from '../../redux/store';


class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        if (!store.getState().allPosts.length) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(result => this.setState({ posts: result }, () => {

              
                    store.dispatch({ type: SETALLPOSTS, posts: this.state.posts })



                }))
                .catch(err => console.log(err));
        } else {
            if (store.getState().allPosts.length) {
                this.setState({ posts: store.getState().allPosts })
            }
           
        }



    }

    render() {
        return (
            <Provider store={store}>
                <h1>ALL POSTS 

                    <AllPosts posts={this.state.posts} />
                </h1>
            </Provider>

        )
    }
}

export default Posts;