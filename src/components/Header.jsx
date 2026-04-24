import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="fixed top-0 px-8 py-2 bg-red-950 w-full z-10 border flex justify-between">
      <img
        alt="logo"
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex p-2 border-amber-300 border-2">
          <img
            alt="usericon"
            className="w-8 h-8"
            src={
              user?.photoURL ||
              "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf1T8EefMIO93OUYg60dbcm27Dlt9BjyU6DMpQqYa_wps0p-kgAzuERJ5ddFGr3q6GWSGLsKjRYHYDGkuUBlF76K_Z6sBIJF6S0A.png?r=229"
            }
          />
          <button
            className="cursor-pointer font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
