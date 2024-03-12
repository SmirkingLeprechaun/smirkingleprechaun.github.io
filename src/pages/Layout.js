import "../../src/App.css";
import { Link } from "react-router-dom";

function Layout() {
    return (

        <>
            <div>
                <nav class="navbar background">
                    <ul class="nav-list">
                        <div class="logo">
                            <Link to="/"><img src=
                                "https://i.stack.imgur.com/kyKz5.png"
                            /></Link>


                        </div>

                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/tutorials">Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/jobs">Jobs</Link>
                        </li>
                        <li>
                            <Link to="/student">Student</Link>
                        </li>
                    </ul>

                    <div class="rightNav">

                        <input
                            type="text"
                            name="search"
                            id="search"
                        />
                        <button class="btn btn-sm">
                            Search
                        </button>
                    </div>
                </nav>


            </div >
        </>)
}
export default Layout;
