import { motion } from "framer-motion";

function Carousel(props) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="card text-primary m-5 align-items-center"
        style={{
          width: "17em",
          boxShadow:
            "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        <iframe
          className="col-md-8 col-12 mt-2"
          src={props.src}
          style={{ height: "100px", width: "auto" }}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="card-body d-flex align-content-between flex-wrap">
          <h6 className="card-title col-12 p-0 font-weight-bold ">
            {props.title ? props.title : "Check this out"}
          </h6>
        </div>
      </motion.div>
    </>
  );
}

export default Carousel;
