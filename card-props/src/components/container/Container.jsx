import React from "react";
import Cards from "../cards/Cards";
// import PropTypes from "prop-types";
function Container({ sendData }) {
  return (
    <>
      <Cards sendData={sendData} />
    </>
  );
}
// Container.propTypes = {
//   sendData: PropTypes,
// };

export default Container;
