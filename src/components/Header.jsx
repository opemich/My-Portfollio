import { FaCross } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white flex justify-around py-6 shadow-md">
      <div>
        <h1 className="font-bold text-[20px] flex"><FaCross className="mx-2 text-3x1"/>DaPriest </h1>
      </div>
      <div className="space-x-6">
        <Link to="/home" className="mx-4 font-semibold hover:text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red-600">
          Home
        </Link>
        <Link to="/about" className="mx-4 font-semibold hover:text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red-600">
          About
        </Link>
        <Link to="/project" className="mx-4 font-semibold hover:text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red-600">
          Project
        </Link>
        <Link to="/skills" className="mx-4 font-semibold hover:text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red-600">
          Skills
        </Link>
        <Link to="/contacts" className="mx-4 font-semibold hover:text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red-600">
          Contact
        </Link>
      </div>
    </div>
  )
}
