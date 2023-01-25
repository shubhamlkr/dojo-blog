import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>That Page cannot be found</p>
            <Link to="/">Go to homepage</Link>
        </div>
     );
}
 
export default NotFound;