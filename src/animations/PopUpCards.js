import { motion } from "framer-motion";

function PopUp(props) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="card cardColor textColor text-justify m-5 align-items-center"
        style={{
          width: "17em",
          boxShadow:
            "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        <img
          className="mt-3"
          src={props.src}
          alt=""
          style={{ height: "140px", width: "210px" }}
        />
        <div className="card-body d-flex align-content-between flex-wrap">
          <h6 className="card-title px-2 text-left col-12 p-0 font-weight-bold ">
            {props.title ? props.title : "Check this out"}
          </h6>
        </div>
      </motion.div>
    </>
  );
}

export default PopUp;
