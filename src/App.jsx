


function App() {
 

  return (
    <>
    <div className='w-full h-full bg-bannerImg bg-no-repeat bg-cover justify-center py-48'>
      <div className='flex flex-col text-3xl'>

      <div className="flex justify-center">
       <img className="w-32 h-32 bg-white rounded-md" src="./src/assets/userImg.jpg" alt="user-img "/> 
        </div>

        <div className="flex justify-center">
       <p className=" bg-white rounded-md p-2 m-2">Yay, you're here! Let's have an amazing time together!</p> 
          </div>

          <div className="flex justify-center">
          <button className="btn btn-success">Creat a List</button>
          </div>

      </div>
    </div>
     
    </>
  )
}

export default App
