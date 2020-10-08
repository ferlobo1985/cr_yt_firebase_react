import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import { Container, Card } from 'react-bootstrap';

import { fetchPosts } from '../../store/actions'; 

const Home = () => {
    const auth = useSelector(state=> state.auth);
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])


    const showPosts = () => {
        return auth.homePosts ?
            auth.homePosts.map((item,i)=>(
                <Card key={i}>
                    <Card.Body>
                        <Card.Title>{item.author.email}</Card.Title>
                        <Card.Text>
                            {item.message}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
        :null
    }

    return(
        <Container className="mt-5">
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { showPosts() }
            </Masonry>
        </Container>
    )
}

export default Home;