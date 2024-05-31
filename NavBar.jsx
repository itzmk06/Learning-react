
function NavBar({data}) {
  return (
    <div className=" flex justify-between w-3xl align-center text-center">
        <h1 className="text-3xl mr-10 font-bold m-7">Orange</h1>
        <h1 className="m-7 text-1xl px-2 py-1 bg-orange-500 rounded-lg text-white mr-5">Favourite {data.filter((item)=>item.added).length}</h1>
    </div>
  )
}

export default NavBar
