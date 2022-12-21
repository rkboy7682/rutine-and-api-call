import { Link } from "react-router-dom";
import './Layout.css';

function Layout(){
    return(
        <nav className="first">
            <ul className="second">
        
                    
                
                <li>
                <Link to="/Home" id="link">Home</Link>
                </li>
                <br/>
                
                <li>
                <Link to="/Contact"id="link">Contact</Link>
                </li>
                <br/>
                
                {/* <li> */}
                {/* <Link to="/Nopage">Nopage</Link> */}
                {/* </li> */}
                <li>
                <Link to="/Counter"id="link">Counter</Link>
                </li>
                <br/>
                
                <li>
                <Link to ="/Demoaxios"id="link">Axios</Link>
                </li><br/>
                
                <li>
                    <Link to = "/Extra"id="link">Extra</Link>
                </li>
                <br/>
                <li >
                    <Link to ="/Contact2"id="link">Contact2</Link>
                </li><br/>
                <br/>
                
            </ul>

        </nav>
    )
}
export default Layout;