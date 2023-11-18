import { Carousel } from "react-bootstrap"

export default function NotFriendPosts({users}){
    let notFriends = users.filter((user) => user.friend !== true)
    return (
        <div>
            <h1>All Other User Posts</h1>
            <Carousel className="w-50 ms-auto me-auto">
                {notFriends.map((friend, index) => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100" src={friend.avatar} alt={index}/>
                            <Carousel.Caption>
                                <h3>{`${friend.first_name} ${friend.last_name}`}</h3>
                                <p>{friend.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}