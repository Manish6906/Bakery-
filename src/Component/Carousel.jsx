
function Carousel() {
  return (
    <>

<div  id="test1" >
<div id="carouselExampleCaptions" className="carousel slide mt-5 bg-primary">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/close-up-delicious-birthday-cake_23-2150734928.jpg?t=st=1725449966~exp=1725453566~hmac=bcf31b61167d84333c18b5fc635c29bad9c17502973dcdf932927acf7b3d7c62&w=1380" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>Food That touches the heart.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/view-plate-with-delicious-sweet-cupcake-dessert_23-2150679536.jpg?t=st=1725429334~exp=1725432934~hmac=68815591c88f67cc8a2af7867bd218645aa021aa4471d36e6572231b70d4a925&w=1380" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>Food That touches the heart.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/delicious-cupcakes-with-fruits_23-2150873153.jpg?t=st=1725433940~exp=1725437540~hmac=904abcd114bf74f38a4e272ea1339c5db09f41424a8200ac06e8bf2b353e355f&w=1380" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>Food That touches the heart.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}

export default Carousel