
function Contact() {
  return (
    <>
    <div className="bg-danger p-2 text-white" id="test5">
    <h1 className="fs-1 text-center">Contact Us</h1>
    <form id="test5 ">
  <div className="form-group d-sm-flex gap-sm-4 justify-content-sm-center">
  <div>
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
    </div>
    <div>
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
  </div>

 
  <div className="form-group text-white mt-2 ">
  <label htmlFor="exampleFormControlInput1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" />
  </div>
  <button type="button" className="btn btn-primary mt-3">Submit</button>
</form>

</div>
    </>
  )
}

export default Contact