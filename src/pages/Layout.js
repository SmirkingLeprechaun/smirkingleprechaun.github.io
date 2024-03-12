import "../../src/App.css";
function Layout() {
    return (

        <>
            <div>
                <nav class="navbar background">
                    <ul class="nav-list">
                        <div class="logo">
                            <a href="/"><img src=
                                "https://i.stack.imgur.com/kyKz5.png"
                            /></a>


                        </div>

                        <li>
                            <a href="courses">Courses</a>
                        </li>
                        <li>
                            <a href="tutorials">Tutorials</a>
                        </li>
                        <li>
                            <a href="jobs">Jobs</a>
                        </li>
                        <li>
                            <a href="student">Student</a>
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
