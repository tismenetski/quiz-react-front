import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className={"container"}>

                {/*<img src={bg} alt="website Background"/>*/}
                <h1>TechQuiz - Improve Your Technical Knowledge</h1>
                <div className={"dashboard-buttons"}>
                    <Link to={"/register"} className="btn btn-large">Register</Link>
                    <Link to={"/login"} className="btn btn-large">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Home;