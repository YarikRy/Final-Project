import { Button, Modal, Form } from "react-bootstrap"


export default function UpdateForm(props){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-center"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update This Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="fName" placeholder='First Name' onChange={(e) => props.setUpdatedFirstName(e.target.value)} value={props.updatedFirstName}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="lName" placeholder='Last Name' onChange={(e) => props.setUpdatedLastName(e.target.value)} value={props.updatedLastName}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content:</Form.Label>
                        <Form.Control type="content" placeholder='What do you want to post?' onChange={(e) => props.setUpdatedContent(e.target.value)} value={props.updatedContent}/>
                    </Form.Group>
                    <Button variant='success mt-3' type='submit' onClick={(e) => props.updateUser(e, props.user)}>Update</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}