import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Your Online Pet Store
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="https://www.liveabout.com/thmb/r34NyiSxfjEg8IZLY7mS1SMoWeA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pet_store-509173668-5ad27f86c0647100380c4f0d.jpg"
                className="d-block w-100 card-img img-fluid"
                alt="dogo"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://img.freepik.com/free-photo/cute-dog-with-owner-pet-shop_23-2148872549.jpg"
                className="d-block w-100 card-img img-fluid"
                alt="store"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.lovepik.com/photo/50180/8045.jpg_wh860.jpg"
                className="d-block w-100 card-img img-fluid"
                alt="pe"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div className="card bg-dark text-white">
          <img
            src="https://img.freepik.com/free-vector/modern-pet-shop-interior-cartoon_33099-1694.jpg"
            className="card-img img-fluid"
            alt="store"
          />
          <div className="card-img-overlay">Adopt a pet</div>
        </div> */}
        {/* <div className="App-logo">
        <div className="App-Name">Adopt a pet</div>
      </div> */}

        <div className="products">
          
          <div className="full-card">
            <div className="image">
              <img src="https://cdn.accentuate.io/169156345910/1590759858400/26-Desktop_Pets_Accessories.jpg"
                 className="" alt="dog food" />
            </div>
            <div className="c-body">
            <h5 className="c-title">Collars</h5>
                  <p className="c-text">
                    This is dog collars.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
            </div>
          </div>

          <div className="full-card full-card2">
            <div className="image">
              <img src="https://m.media-amazon.com/images/I/61tpJfHWkxL.jpg"
                 className="" alt="dog food" />
            </div>
            <div className="c-body">
            <h5 className="c-title">Beds</h5>
                  <p className="c-text">
                    This is dog beds.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
            </div>
          </div>

          <div className="full-card">
            <div className="image">
              <img src="https://vetic.in/blog/wp-content/uploads/2023/07/34.jpg"
                 className="" alt="dog food" />
            </div>
            <div className="c-body">
            <h5 className="c-title">Chews</h5>
                  <p className="c-text">
                    This is dog food.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
            </div>
          </div>

          {/* <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://cdn.accentuate.io/169156345910/1590759858400/26-Desktop_Pets_Accessories.jpg?v=1680101199765"
                 className="img-fluid rounded-start" alt="dog food" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Collars</h5>
                  <p className="card-text">
                    This is dog food.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFt05NP7C6qfiwz90vDKfHnWfU4VrMEVzyAg&usqp=CAU"
                 className="img-fluid rounded-start" alt="dog food" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Glute Free Chews</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png"
                 className="img-fluid rounded-start" alt="dog food" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Beds</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </main>

    </div>
  );
}

export default App;
