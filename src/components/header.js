import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions';

const Header = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {isAuth} = props.auth;


    const handleLogout = () => {
        dispatch(logoutUser()).then(()=>{
            history.push('/');
        })
    }

    return(
        <header>
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>MsgApp</Navbar.Brand>
                </LinkContainer>
               
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    { isAuth ?
                        <>
                            <LinkContainer to="/user/addpost">
                                <Nav.Link>Add post</Nav.Link>
                            </LinkContainer>

                            <Nav.Link
                                onClick={handleLogout}
                            >
                                Logout
                            </Nav.Link>
                
                        </>
                    :
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    }
                  

                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;