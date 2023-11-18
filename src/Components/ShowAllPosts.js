import { Card, Container, Row, Col, Button } from "react-bootstrap"
import UpdateForm from "./UpdatePostForm"


export default function ShowAllPosts(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col> 
                        {props.users.map((user, index) => {
                            return (

                                    //React Bootstrap styling
                                    // <Card className="box" key={index}>
                                    //     <Card.Img variant="top" src={user.avatar}/>
                                    //     <Card.Body>
                                    //         <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                                    //         <Card.Text>{user.content}</Card.Text>
                                    //         <Card.Text>{user.date}</Card.Text>
                                    //     </Card.Body>
                                    //     <Button onClick={() => setShow(true)}>Update</Button>
                                    //     <Card.Footer><UpdateForm 
                                    //     updateUser={updateUser} 
                                    //     user={user} 
                                    //     key={index} 
                                    //     show={show} 
                                    //     setShow={setShow} 
                                    //     onHide={() => setShow(false)}
                                    //     setUpdatedFirstName={setUpdatedFirstName}
                                    //     setUpdatedLastName={setUpdatedLastName}
                                    //     setUpdatedContent={setUpdatedContent}
                                    //     updatedFirstName={updatedFirstName}
                                    //     updatedLastName={updatedLastName}
                                    //     updatedContent={updatedContent}
                                    //     />
                                    //     </Card.Footer>
                                    // </Card>


                                    //Divs and css styling
                                    
                                    <div className="box backLight" key={index}>
                                        <div className="left">
                                            <img src={user.avatar} className="smallImg"></img>
                                            <h3>{`${user.first_name} ${user.last_name}`}</h3>
                                            {user.friend ? (
                                                <button className="btn btn-danger btn-sm ms-4" onClick={(e) => props.updateFriend(e, user)}>Remove Friend</button>
                                            ) : (
                                                <button className="btn btn-success btn-sm ms-4" onClick={(e) => props.updateFriend(e, user)}>Add Friend</button>
                                            )}
                                        </div>
                                        <div className="p-2 text-start">
                                            <p>{user.content}</p>
                                            <p className="muted">{user.date}</p>
                                        </div>
                                        <div>
                                        <Button className="smallBtn" size="sm" onClick={() => props.setShow(true)}>Update</Button>
                                        <Button className="smallBtn btn-danger" size="sm" onClick={() => props.deleteUser(user.id)}>Delete</Button>
                                        </div>
                                    </div>
                            )
                        })}
                        <UpdateForm 
                            updateUser={props.updateUser} 
                            users={props.users} 
                            key={props.index} 
                            setShow={props.setShow}
                            show={props.show}  
                            onHide={() => props.setShow(false)}
                            setUpdatedFirstName={props.setUpdatedFirstName}
                            setUpdatedLastName={props.setUpdatedLastName}
                            setUpdatedContent={props.setUpdatedContent}
                            updatedFirstName={props.updatedFirstName}
                            updatedLastName={props.updatedLastName}
                            updatedContent={props.updatedContent}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}