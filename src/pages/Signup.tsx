import { Toaster } from "react-hot-toast";
import logo from "../assets/logo-seotracker.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUserSignUpMutation } from "../redux/feature/authApi";
import { setUserInfo } from "../redux/feature/authSlice";

function Signup() {
  const { register, handleSubmit } = useForm();
  const [signUpFn, { isLoading }] = useUserSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // handle account create
  const onSubmit = async (data:any) => {
    try {
      let response:any = await signUpFn(data);
      if (response.error) {
        const message = response.error?.data?.message;
        return toast.error(message);
      }
      if (response?.data?.data) {
        dispatch(setUserInfo(response?.data?.data));

        toast.success("login successfully", { duration: 3000 });
        navigate("/");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="border flex justify-center w-screen h-screen items-center bg-gray-50">
      <Toaster />
      <main className="my-6 mx-7">
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-[150px] object-cover" />
        </div>
        <div className="text-center my-4 text-5xl font-semibold mt-16">
          <h1>Create an account</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="rounded-sm min-w-[48rem] bg-white shadow-[var(--shadow-md)]"
        >
          <div className="py-[2.4rem] px-[4rem]">
            <div className="flex flex-col pt-5">
              <label className="mb-2 font-medium text-[1.4rem]">
                Full name
              </label>
              <input
                type="text"
                placeholder="enter your full name"
                autoComplete="true"
                className="input-style"
                {...register("fullName", { required: true })}
              />
            </div>
            <div className="flex flex-col my-5 ">
              <label className="mb-2 font-medium text-[1.4rem]">
                Email address
              </label>
              <input
                type="email"
                placeholder="demo@example.com"
                autoComplete="true"
                className="input-style"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-[1.4rem]">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                autoComplete="true"
                className="input-style"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex flex-col items-center justify-center py-16">
              <button type="submit" className="button-style w-full">
                Sign up
              </button>
              <div className="mt-5">
                <h1 className="text-gray-500">
                  Already have an account ?
                  <NavLink to="/login" className="px-4 signup">
                    Login
                  </NavLink>
                </h1>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Signup;
