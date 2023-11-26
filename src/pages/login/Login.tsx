/* eslint-disable @typescript-eslint/no-explicit-any */
import { Eye, Lock1, Message, Profile2User, User } from "iconsax-react";
import Carousel from "../../components/carousel/Carousel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import ApiFetcher from "../../Api/ApiFetcher";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../store/reducers/AuthSlice";

export interface IuserCred {
  email: string;
  password: string;
}

export default function Login() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [passwordType, setPasswordType] = useState<string>("password");
  const [loading, setLoading] = useState<boolean>(false);
  const [loginType, setLogingType] = useState<string>("");

  function togglePassword() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  const [userCred, setUserCred] = useState<IuserCred>({
    email: "",
    password: "",
  });

  const [userCredErr, setUserCredErr] = useState<IuserCred>({
    email: "",
    password: "",
  });

  //   handle email validation
  function handleEmail(email: string) {
    if (email.trim() === "") {
      return "email cannot be empty";
    } else if (!emailRegex.test(email)) {
      return "email must be a valid email";
    } else {
      return "";
    }
  }

  //   handle password validation
  function handlePassword(password: string) {
    return password.trim() !== "" ? "" : "Password cannot be empty";
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const invalidEmail = handleEmail(userCred.email);

      const invalidPassword = handlePassword(userCred.password);

      setUserCredErr({ email: invalidEmail, password: invalidPassword });

      setLoading(true);

      const response = await ApiFetcher.post(
        `admin/login`,
        {
          email: userCred.email,
          password: userCred.password,
        }
      );
      if (response.status === 201) {
        enqueueSnackbar(`${response?.data?.message}`, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        navigate("/");
        dispatch(loginAdmin(response.data.data));
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      if (error?.response) {
        enqueueSnackbar(`${error?.response?.data?.message}`, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    }
  };

  console.log(userCred);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] h-full bg-blue-500">
        <Carousel />
      </div>
      <div className="w-[50%] h-full flex justify-center gap-9 items-center">
        {!loginType && (
          <>
            <div
              className="w-[30%] flex flex-col shadow-md hover:scale-110 transition-all cursor-pointer hover:bg-purple-1 hover:text-white justify-center place-items-center gap-3 rounded-lg p-5 border"
              onClick={() => setLogingType("Admin")}
            >
              <User size={40} className="" />
              <p className="text-lg font-semibold">Admin Login</p>
            </div>

            <div
              className="w-[30%] flex flex-col shadow-md hover:scale-110 transition-all cursor-pointer hover:bg-purple-1 hover:text-white justify-center place-items-center gap-3 rounded-lg p-5 border"
              onClick={() => setLogingType("memnber")}
            >
              <Profile2User size={40} className="" />
              <p className="text-lg font-semibold">Member Login</p>
            </div>
          </>
        )}

        {loginType && (
          <div className="px-8 py-8 w-[70%] border border-black rounded-2xl shadow-[4px_4px_12px_4px_rgba(106,85,155,0.11)]">
            <p className="text-center text-2xl font-bold text-purple-1">
              SIGN IN
            </p>
            <p className="text-center text-xl mt-2">
              Fleet Management and Logistics
            </p>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="w-full mt-8 relative">
                <Message
                  size={20}
                  className="absolute left-4 top-4"
                  color="#6A559B"
                />
                <input
                  className="pl-12 py-4 rounded-lg focus:outline-none border border-[#6A559B] w-full"
                  type="text"
                  name=""
                  value={userCred.email}
                  onChange={(e) =>
                    setUserCred({ ...userCred, email: e.target.value })
                  }
                  id=""
                  placeholder="email"
                />
              </div>
              {userCredErr.email && (
                <p className="text-sm text-red-500">{userCredErr.email}</p>
              )}

              <div className="w-full mt-8 relative">
                <Lock1
                  size={20}
                  className="absolute left-4 top-4"
                  color="#6A559B"
                />
                <Eye
                  size={20}
                  className="absolute right-4 top-5"
                  cursor="pointer"
                  color="#6A559B"
                  onClick={togglePassword}
                />
                <input
                  className="pl-12 py-4 rounded-lg focus:outline-none border border-[#6A559B] w-full"
                  type={passwordType}
                  name=""
                  value={userCred.password}
                  onChange={(e) =>
                    setUserCred({ ...userCred, password: e.target.value })
                  }
                  id=""
                  placeholder="password"
                />
              </div>
              {userCredErr.password && (
                <p className="text-sm text-red-500">{userCredErr.password}</p>
              )}

              <button className="w-full mt-8 py-4 text-white rounded-lg bg-purple-1">
                {loading ? "Loading..." : "Sign In"}
              </button>

              <button onClick={() => enqueueSnackbar("That was easy!")}>
                Show snackbar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
