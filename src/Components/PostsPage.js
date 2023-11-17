import NewPostForm from "./PostForm"

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
        </div>
    )
}