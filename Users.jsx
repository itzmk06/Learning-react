import { Link } from "react-router-dom";

function Users() {
  return (
    <div className="relative w-1/2 m-auto flex flex-col text-xl">
      <Link
        className="bg-red-200  mt-5 mb-5 hover:bg-red-300 px-2 py-2 text-center "
        to="/users/manoj"
      >
        Manoj
      </Link>
      <Link
        className="bg-red-200  mt-5 mb-5 hover:bg-red-300 px-2 py-2 text-center "
        to="/users/ketaki"
      >
        Ketaki
      </Link>
      <Link
        className="bg-red-200  mt-5 mb-5 hover:bg-red-300 px-2 py-2 text-center "
        to="/users/samrath"
      >
        Samrath
      </Link>
      <Link
        className="bg-red-200  mt-5 mb-5 hover:bg-red-300 px-2 py-2 text-center "
        to="/users/neeha"
      >
        Neeha
      </Link>
    </div>
  );
}

export default Users;
