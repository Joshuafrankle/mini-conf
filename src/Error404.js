import LaptopLogo from "./assets/images/Laptop.svg";

function Error404() {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center container"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <img src={LaptopLogo} alt="" width="500" height="400" />
          <h1>Uh no! Requested URL doesn't exist</h1>
        </div>
      </section>
    </>
  );
}
export default Error404;
