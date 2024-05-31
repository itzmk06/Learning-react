import { useNavigate, useParams } from "react-router-dom"
function UserDetail() {

    const navigate=useNavigate();
    const {name}=useParams();
    const handleBack=()=>{
        // navigate(-1);
        navigate('/user')

    }
    return (
    <div className="w-[80%] m-auto">
      <h1 className="font-semibold text-3xl text-blue-500">User Detail</h1>
      <h1 className="font-bold text-4xl mt-5">Good night {name[0].toUpperCase()+name.slice(1)}😊 </h1>
      <button onClick={handleBack} className="px-3 py-2 rounded-md text-white bg-blue-500 mt-5">Go Back</button>
    </div>
  )
}

export default UserDetail
