

export default function AllUsers(props){
    return (
        <div>
            {props.users.map((user, index) => {
                return (
                    <div className="boxBig backLight" key={index}>
                        <div className="leftUsers">
                            <img src={user.avatar} className="smallImg"></img>
                            <h3>{`${user.first_name} ${user.last_name} - #${index}`}</h3>
                            {user.friend ? (
                                <button className="btn btn-danger btn-sm ms-4" onClick={(e) => props.updateFriend(e, user)}>Remove Friend</button>
                            ) : (
                                <button className="btn btn-success btn-sm ms-4" onClick={(e) => props.updateFriend(e, user)}>Add Friend</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}