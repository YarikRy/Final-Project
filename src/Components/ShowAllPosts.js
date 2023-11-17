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
                                        </div>
                                        <div>
                                            {/* <h3>{`${user.first_name} ${user.last_name}`}</h3> */}
                                        </div>
                                        <div className="p-2 text-start">
                                            <p>{user.content}</p>
                                            <p className="muted">{user.date}</p>
                                        </div>
                                        <Button className="smallBtn" size="sm" onClick={() => props.setShow(true)}>Update</Button>
                                        <div>
                                        <UpdateForm 
                                        updateUser={props.updateUser} 
                                        user={user} 
                                        key={props.index} 
                                        show={props.show}  
                                        onHide={() => props.setShow(false)}
                                        setUpdatedFirstName={props.setUpdatedFirstName}
                                        setUpdatedLastName={props.setUpdatedLastName}
                                        setUpdatedContent={props.setUpdatedContent}
                                        updatedFirstName={props.updatedFirstName}
                                        updatedLastName={props.updatedLastName}
                                        updatedContent={props.updatedContent}
                                        />
                                        </div>
                                    </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}