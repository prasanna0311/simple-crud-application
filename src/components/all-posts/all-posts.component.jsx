import React, { useState } from 'react';
import './all-posts.styles.css';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { store, DELETEPOST } from '../../redux/store';


const Example = ({ showModal, showHandler, cancelHandler, saveHandler }) => {


    return (
        <div>

            <Modal show={showModal} onHide={cancelHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you Sure you Want To Delete This Post?<div> This Action Cannot Be Reversed </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelHandler}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={saveHandler}>
                        Delete Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const AllPosts = ({ posts }) => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [postId, setPostId] = useState(0)
    const handleClose = () => setShow(false)
    const handleShow = (event) => {
        setShow(true)
        setPostId(parseInt(event.currentTarget.id))
    }

    const saveHandler = (event) => {
        event.preventDefault();
        
        store.dispatch({ type: DELETEPOST, postId: postId });
        handleClose();
   

    }


    return (
        <div className="posts-page">
            <Example showModal={show} showHandler={handleShow} cancelHandler={handleClose} saveHandler={saveHandler} />
            <div className="button">
                <button className="btn btn-success float-center mb-12"  onClick={() => history.replace('/post/createPost')}>ADD POST</button>
            </div>
            <table className="table table-hover table-borderless">
                <tbody>
                    {
                        posts.map(post => (
                            <tr className=" row-content" key={post.id} >
                                <td className="ms-3 ps-3">
                                </td>
                                <td className="text-start"> <h1>{post.title ? post.title : 'Test'}</h1>
                                    <p>{post.body}</p>
                                </td>

                                <td id={post.id} onClick={(event) => handleShow(event)}> <Button variant="outline-danger">DELETE</Button></td>

                                <td>  <Button variant="outline-dark"  onClick={() => history.push(`/posts/${post.id}`)} >VIEW</Button> </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}


export default AllPosts;
