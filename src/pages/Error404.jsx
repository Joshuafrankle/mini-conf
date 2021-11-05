import LaptopLogo from "../assets/images/error.svg";

function Error404() {
  function takeHome() {
    window.location.replace("/");
  }
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center bg-dark"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h1 className="stream-text text-white mb-5">
            Oops! Seems like you are lost
          </h1>
          <img src={LaptopLogo} className="" alt="Page not found" />
          <button
            onClick={takeHome}
            className="errorButton mt-5 text-white btn btn-primary"
            style={{ backgroundColor: "#363636" }}
          >
            <span>Take me home</span>
          </button>
        </div>
      </section>
    </>
  );
}
export default Error404;
