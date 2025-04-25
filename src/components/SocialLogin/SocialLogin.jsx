import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
   return (
      <div className='flex flex-col gap-2 mt-4'>
         <button className="flex items-center gap-3 btn"> <FcGoogle />Login With Google</button>
         <button className="flex items-center gap-3 btn"><FaGithub />Login With Github</button>
      </div >
   )
}

export default SocialLogin