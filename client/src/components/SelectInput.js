import styled from "styled-components";

const SelectInput = ({ labelText, name, value, handleChange, list, className }) => {
  return (
    <Wrapper className="row">
      <div className="form-row">
        <label htmlFor={name} className={className || 'form-label'}>
          {labelText || name}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="form-select"
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: green;
    margin-top: 1.5rem;
  }
`;

export default SelectInput;
