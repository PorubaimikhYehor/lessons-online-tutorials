import './login-form.css'
import backgroundImage from '../../assets/Best-of-2016-Nasim-Mansurov-20.jpg';

function LoginForm() {
  return (
    <>
      <section style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen w-full text-white fill-white ">
        <div className="form-box relative w-[400px] h-[450px] flex justify-center items-center border-2 rounded-lg backdrop-blur" >
          <form action="">
            <h2 className="text-2xl text-white text-center">Login</h2>
            <div className="inputbox relative my-8 w-72 border-b-2">
              <div className="inline-block w-6 absolute right-2 bottom-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
              </div>
              <input className="w-full h-12 bg-transparent outline-none text-base pl-1 pr-9" type="email" required />
              <label className="absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none	ease-linear duration-300" htmlFor="">Email</label>
            </div>
            <div className="inputbox relative mt-8 mb-8 w-72 border-b-2 ">
              <div className="inline-block w-6 absolute right-2 bottom-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>
              </div>
              <input className="w-full h-12 bg-transparent outline-none text-base pl-1 pr-9" type="password" required />
              <label htmlFor="" className="absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none ease-in duration-300">Password</label>
            </div>
            <div className="forget mb-4 justify-center flex">
              <label htmlFor="">
                <input type="checkbox" className='mr-1' />
                Remember Me
                <a href="#" className='mx-2 hover:underline'>Forget password</a>
              </label>
            </div>
            <button className='w-full h-8 bg-white rounded-full text-black text-base font-semibold'>Log in</button>
            <div className="register text-sm text-center mt-6 mb-2">
              <p className=''>Do not have a account <a className='font-semibold hover:underline' href="#">Register</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginForm
