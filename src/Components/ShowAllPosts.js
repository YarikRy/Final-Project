import { Card, Container, Row, Col, Button } from "react-bootstrap"
import UpdateForm from "./UpdatePostForm"


export default function ShowAllPosts({users, show, setShow, updateUser, setUpdatedFirstName, setUpdatedLastName, setUpdatedContent, updatedContent, updatedFirstName, updatedLastName}) {
    return (
        <div>
            <Container>
                <Row>
                    {users.map((user, index) => {
                        return (
                            <Col className="align-items-"> 
                                <Card key={index} style={{width: '15rem'}}>
                                    <Card.Img variant="top" src={user.avatar}/>
                                    <Card.Body>
                                        <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                                        <Card.Text>{user.content}</Card.Text>
                                        <Card.Text>{user.date}</Card.Text>
                                    </Card.Body>
                                    <Button onClick={() => setShow(true)}>Update</Button>
                                    <Card.Footer><UpdateForm 
                                    updateUser={updateUser} 
                                    user={user} 
                                    key={index} 
                                    show={show} 
                                    setShow={setShow} 
                                    onHide={() => setShow(false)}
                                    setUpdatedFirstName={setUpdatedFirstName}
                                    setUpdatedLastName={setUpdatedLastName}
                                    setUpdatedContent={setUpdatedContent}
                                    updatedFirstName={updatedFirstName}
                                    updatedLastName={updatedLastName}
                                    updatedContent={updatedContent}
                                    />
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}