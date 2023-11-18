import { NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="footer container-fluid">
            <div className="row">
                <div className="col">
                    <p>Thank you for visiting Social!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to='/'>Home</Link>
                </div>
                <div className="col">
                    <Link to='/friends'>Friends</Link>
                </div>
                <div className="col">
                    <Link to='/posts'>Posts</Link>
                </div>
                <div className="col">
                    <Link to='/users'>Users</Link>
                </div>
            </div>
        </div>
    )
}