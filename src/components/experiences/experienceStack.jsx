const ExperienceStack = (props) => {
  const { id, stack, onToggleStack } = props;
  return (
    <div className="technicalStack p-5" id={"stack_" + id}>
      <button
        type="button"
        className="btn-close btn-close-white technicalStackCloseBtn"
        aria-label="Close"
        onClick={() => onToggleStack()}
      ></button>
      <div className="">
        {stack.map((item, index) => (
          <span key={id + ".stack." + index}>
            {item}
            {item !== stack[stack.length - 1] && ", "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceStack;
