import PropTypes from "prop-types";
const RollingText = ({ text }) => {
  return (
    <div className=" overflow-hidden whitespace-nowrap">
      <div className="text-pink-500 animate-rollText text-lg font-bold">{text}</div>
    </div>
  );
};
RollingText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default RollingText;
