import {auth} from '../config/Firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';

  function Signin(email, password, navigation) {

    if (email === "" && password === "") {
        alert("Please enter name and password")
    
      } else if (email === "") {
        alert("Please enter email")
      } else if (password === "") {
        alert("Please enter  password")
      } else {
        signInWithEmailAndPassword (auth, email, password).then(()=>{
          navigation.navigate('login')
    
        }).catch(()=>{
    
            alert("Successfuly login")
        })
      }
}


export default Signin 