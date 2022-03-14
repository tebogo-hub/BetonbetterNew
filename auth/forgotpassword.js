import { auth } from '../config/Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';


const Forgotpasswordf = ((email) =>{
    if (email === ""){
        alert("Please email")
    }
   alert('please check your email to confirm')
    sendPasswordResetEmail(auth,email,)

})
export { Forgotpasswordf }