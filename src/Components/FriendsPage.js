
export default function FriendsPage({users, updateFriend}){
    const friendList = users.filter((user) => user.friend === true)
    return(
        <div>
            {friendList.map((friend, index) => {
                return (
                    <div className="boxBig backLight" key={index}>
                        <div className="leftUsers">
                            <img src={friend.avatar} className="smallImg"></img>
                            <h3>{`${friend.first_name} ${friend.last_name} - #${index}`}</h3>
                            {friend.friend ? (
                                <button className="btn btn-danger btn-sm ms-4" onClick={(e) => updateFriend(e, friend)}>Remove Friend</button>
                            ) : (
                                <button className="btn btn-success btn-sm ms-4" onClick={(e) => updateFriend(e, friend)}>Add Friend</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}