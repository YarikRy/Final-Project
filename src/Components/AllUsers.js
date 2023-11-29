

export default function AllUsers(props){
    return (
        <>
        <div>
            {props.users.map((user, index) => {
                return (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center flex mx-auto mt-2 pt-3" key={index}>
                        <div className="flex flex-col items-center pb-10">
                            <img src={user.avatar} className="w-24 h-24 mb-3 rounded-full shadow-lg"></img>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">{`${user.first_name} ${user.last_name}`}</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400 pb-2">@{user.username}</span>
                            {user.friend ? (
                                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => props.updateFriend(e, user)}>Remove Friend</button>
                            ) : (
                                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => props.updateFriend(e, user)}>Add Friend</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>

       
    </>
    )
}