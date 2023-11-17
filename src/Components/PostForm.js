import { Form, Button, Container } from 'react-bootstrap'


export default function NewPostForm(props){
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="fName" placeholder='First Name' onChange={(e) => props.setNewFirstName(e.target.value)} value={props.newFirstName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="lName" placeholder='Last Name' onChange={(e) => props.setNewLastName(e.target.value)} value={props.newLastName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Avatar IMG url: </Form.Label>
                    <Form.Control type="avatar" placeholder='Enter your avatar img link' onChange={(e) => props.setNewUserAvatar(e.target.value)} value={props.newUserAvatar}/>
                    <Form.Text className='text-muted'>Find a picture, then copy the image url</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control type="content" placeholder='What do you want to post?' onChange={(e) => props.setNewContent(e.target.value)} value={props.newContent}/>
                </Form.Group>
                <Button variant='success mt-3' type='submit' onClick={(e) => props.postNewUser(e)}>Post</Button>
            </Form>
        </Container>
    )
}