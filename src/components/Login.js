import './Login.css';
import { Button } from '@material-ui/core';
import logo from '../facebook.svg'

// FIREBASE OPERATION
import { auth, provider } from '../firebase';
// CONTEXT API
import { useStateValue } from '../contexts/StateProvider';
import { SET_USER } from '../contexts/actions';

export default function Login() {

  const { dispatch } = useStateValue()

  // FIREBASE OPERATION
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({ type: SET_USER, payload: result.user })
      })
      .catch(error => {
        alert(error.message);
      })
  }

  return (
    <div className="login__container">
      <div className="login">
        <img className="logo" src={logo} alt="logo" />
        <Button className="button" type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  )
}