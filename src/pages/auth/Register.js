import {Fragment, useEffect, useState} from "react";
import {useGlobalContext} from "../../context";
import {Link , useNavigate} from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {register,isLoading,isAuthenticated} = useGlobalContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,email,password
        }
        register(data);
        console.log('submit')
    }

    useEffect(() => {
        if (isAuthenticated){
            navigate('/dashboard' , {replace : true});
        }
    }, [isAuthenticated])

    if (isLoading) {
        return <div className={"loading"}></div>
    }

    return (
        <Fragment>
            <div className={"auth-container"}>
                <h1>Register</h1>
         <form className={"form-auth"}>
             <div className="form-control">
                 <label htmlFor="name">Name</label>
                 <input type="text" id="name" placeholder="Enter your name..." value={name} onChange={(e)=> setName(e.target.value)} />
                 <p className={"form-error"}></p>
             </div>
             <div className="form-control">
                 <label htmlFor="email">Email</label>
                 <input type="email" id="email" placeholder="Enter your email..." value={email} onChange={(e)=> setEmail(e.target.value)}  />
                 <p className={"form-error"}></p>
             </div>
             <div className="form-control">
                 <label htmlFor="password">Password</label>
                 <input type="password" id="password" placeholder="Enter your password..." value={password} onChange={(e)=> setPassword(e.target.value)}  />
                 <p className={"form-error"}></p>
             </div>
             <button type={"submit"} className={"btn"} onClick={handleSubmit}>Register</button>
         </form>
            </div>
        </Fragment>
    )
}

export default Register