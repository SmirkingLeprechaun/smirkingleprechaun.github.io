import "../../src/App.css";
import { Link } from "react-router-dom";

function Layout() {
    return (

        <>
            <div>
                <nav class="navbar background">
                    <ul class="nav-list">
                        {/* <div class="logo">
                            <Link to="/"><img src=
                                "https://i.stack.imgur.com/kyKz5.png"
                            /></Link>


                        </div> */}
                        <li id="item1">
                            <Link to="/">About Me</Link>
                        </li>

                        <li id="item2">
                            <Link to="/courses">Skills</Link>
                        </li>
                        <li id="item3">
                            <Link to="/tutorials">Projects</Link>
                        </li>
                        <li id="item4">
                            <Link to="/jobs">Contact Me</Link>
                        </li>
                    </ul>


                </nav>


            </div >
        </>)
}
export default Layout;
