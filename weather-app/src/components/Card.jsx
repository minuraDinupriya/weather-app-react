import './Card.css'

export default function Card() {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            style={{ color: "#282828" }}
          >
            <div className="col-md-9 col-lg-7 col-xl-5">
              <div
                className="card mb-4 gradient-custom"
                style={{ borderRadius: 25 }}
              >
                <div className="card-body p-4">
                  <div
                    id="demo1"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    {/* Indicators */}
                    <ul className="carousel-indicators mb-0">
                      <li
                        data-target="#demo1"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#demo1" data-slide-to={1} />
                      <li data-target="#demo1" data-slide-to={2} />
                    </ul>
                    {/* Carousel inner */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-between mb-4 pb-2">
                          <div>
                            <h2 className="display-2">
                              <strong>23°C</strong>
                            </h2>
                            <p className="text-muted mb-0">Coimbra, Portugal</p>
                          </div>
                          <div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                              width="150px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4" style={{ borderRadius: 25 }}>
                <div className="card-body p-4">
                  <div
                    id="demo2"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    {/* Indicators */}
                    <ul className="carousel-indicators mb-0">
                      <li data-target="#demo2" data-slide-to={0} />
                      <li
                        data-target="#demo2"
                        data-slide-to={1}
                        className="active"
                      />
                      <li data-target="#demo2" data-slide-to={2} />
                    </ul>
                    {/* Carousel inner */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                          <div className="flex-column">
                            <p className="small">
                              <strong>21°C</strong>
                            </p>
                            <i
                              className="fas fa-sun fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>12:00</strong>
                            </p>
                            <p
                              className="mb-0 text-muted"
                              style={{ fontSize: ".65rem" }}
                            >
                              PM
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>2°C</strong>
                            </p>
                            <i
                              className="fas fa-sun fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>1:00</strong>
                            </p>
                            <p
                              className="mb-0 text-muted"
                              style={{ fontSize: ".65rem" }}
                            >
                              PM
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>20°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>2:00</strong>
                            </p>
                            <p
                              className="mb-0 text-muted"
                              style={{ fontSize: ".65rem" }}
                            >
                              PM
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>19°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>3:00</strong>
                            </p>
                            <p
                              className="mb-0 text-muted"
                              style={{ fontSize: ".65rem" }}
                            >
                              PM
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>18°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud-showers-heavy fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>4:00</strong>
                            </p>
                            <p
                              className="mb-0 text-muted"
                              style={{ fontSize: ".65rem" }}
                            >
                              PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card" style={{ borderRadius: 25 }}>
                <div className="card-body p-4">
                  <div
                    id="demo3"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    {/* Indicators */}
                    <ul className="carousel-indicators mb-0">
                      <li data-target="#demo3" data-slide-to={0} />
                      <li data-target="#demo3" data-slide-to={1} />
                      <li
                        data-target="#demo3"
                        data-slide-to={2}
                        className="active"
                      />
                    </ul>
                    {/* Carousel inner */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                          <div className="flex-column">
                            <p className="small">
                              <strong>21°C</strong>
                            </p>
                            <i
                              className="fas fa-sun fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>Mon</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>20°C</strong>
                            </p>
                            <i
                              className="fas fa-sun fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>Tue</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>16°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>Wed</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>17°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>Thu</strong>
                            </p>
                          </div>
                          <div className="flex-column">
                            <p className="small">
                              <strong>18°C</strong>
                            </p>
                            <i
                              className="fas fa-cloud-showers-heavy fa-2x mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>Fri</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
