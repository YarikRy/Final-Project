import FriendPosts from "./FriendPosts"
import NewPostForm from "./PostForm"
import NotFriendPosts from "./NotFriendPosts"

export default function PostsPage(props){
    return(
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
            <FriendPosts users={props.users}/>
            <NotFriendPosts users={props.users}/>
        </div>
    )
}