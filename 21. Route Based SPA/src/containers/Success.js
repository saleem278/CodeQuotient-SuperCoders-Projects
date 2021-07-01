function Success(props) {
  return (
    <>
        {
          function a(){
            if(props.myurl==="/signup/success"){
              return <p className="p-3 mt-3 bg-success text-white text-center font-weight-bold">Signed Up Succesfully</p>
            }else if(props.myurl==="/signin/success"){
              return <p className="p-3 mt-3 bg-success text-white text-center font-weight-bold">Signed In Succesfully</p>
            }
          }()
        }
    </>
  );
}

export default Success;
