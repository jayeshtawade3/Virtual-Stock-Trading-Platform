import { useRef } from "react";
import "./style.css";

const CompanyDescription = ({ description }) => {
  const descriptionRef = useRef();

  if (!description || description === "") {
    return (
      <div className="no-description">
        <p ref={descriptionRef}>Company description not available.</p>
      </div>
    );
  }

  return (
    <div className="company-description--wrapper">
      <div className="description--wrapper">
        <p ref={descriptionRef} className="description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CompanyDescription;
