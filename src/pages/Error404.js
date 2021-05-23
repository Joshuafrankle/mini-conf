import LaptopLogo from "../assets/images/Laptop.svg";

function Error404() {
  return (
    <>
      <section
        className="align-items-center justify-content-center bg-dark"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <img
            src={LaptopLogo}
            className="errorImage"
            alt=""
            style={{ maxHeight: "90vh", maxWidth: "90vh" }}
          />
          <h3 className="stream-text text-white">
            Uh no! Requested URL doesn't exist
          </h3>
        </div>
      </section>
    </>
  );
}
export default Error404;
