import {auth} from '../config/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'


const FirebaseSignup = (email, password, navigation) => {

  if (email === "" && password === "") {
    alert("Please enter name and password")
  } else if (email === "") {
    alert("Please enter email")
  } else if (password === "") {
    alert("Please enter  password")
  } else {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert("Regiistered successfuuly")

      navigation.navigate('login')

    }).catch((err) => {
      console.log(err)

      alert("error")
    })

  }

};
export default FirebaseSignup;