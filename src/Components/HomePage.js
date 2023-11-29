import { Card } from "react-bootstrap"
import NewPostForm from "./PostForm"
import ShowAllPosts from "./ShowAllPosts"

export default function HomePage(props){
    return(
        <>
        <div>
            <NewPostForm 
            users={props.users}
            setUsers={props.setUsers} 
            newFirstName={props.newFirstName} 
            newLastName={props.newLastName}
            newContent={props.newContent}
            newUserAvatar={props.newUserAvatar}
            setNewFirstName={props.setNewFirstName}
            setNewLastName={props.setNewLastName}
            setNewContent={props.setNewContent}
            setNewUserAvatar={props.setNewUserAvatar}
            postNewUser={props.postNewUser}
            />
        </div>
        <div>
            <ShowAllPosts 
            users={props.users}
            show={props.show}
            setShow={props.setShow}
            updateUser={props.updateUser}
            setUpdatedFirstName={props.setUpdatedFirstName}
            setUpdatedLastName={props.setUpdatedLastName}
            setUpdatedContent={props.setUpdatedContent}
            updatedFirstName={props.updatedFirstName}
            updatedLastName={props.updatedLastName}
            updatedContent={props.updatedContent}
            deleteUser={props.deleteUser}
            updateFriend={props.updateFriend}
            account={props.account}
            />
        </div>
        </>
    )
}