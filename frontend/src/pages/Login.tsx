import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';

function Login() {

  let history = useHistory();
 
  const loginClicked = (event: FormEvent) => {
    event.preventDefault();

    console.log('login clicked')
    history.push('/scanner');

  }
  return (
    <div className="login-page" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/inventory.jpg'})`}}>
      <div className="login-modal">
        <header className="login-modal-header">
          <h1>
            IMS
          </h1>
        </header>
        <form className="login-form" onSubmit={loginClicked}>

          <input className="username-input" placeholder="username"></input>
          <input className="password-input" placeholder="password" type="password"></input>

          <div className="login-btn-grp">
            <button className="login-btn btn-primary" type="submit">Login</button>
            <button className="register-btn btn-secondary">Register</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login;
