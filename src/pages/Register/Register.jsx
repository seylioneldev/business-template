import s from './style.module.css'

export function Register({}){
    return(
        <div className={`${s.container}`}>
            <form className={`${s.form}`}>
                <p className={`${s.title}`}>Register </p>
                <p className={`${s.message}`}>Signup now and get full access to our app. </p>
                    <div className={`${s.flex}`}>
                    <label>
                        <input required="" placeholder="" type="text" className={`${s.input}`}/>
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className={`${s.input}`}/>
                        <span>Lastname</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" className={`${s.input}`}/>
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password" className={`${s.input}`}/>
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" className={`${s.input}`}/>
                    <span>Confirm password</span>
                </label>
                <button className={`${s.submit}`}>Submit</button>
                <p className={`${s.signin}`}>Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </div>
        )}