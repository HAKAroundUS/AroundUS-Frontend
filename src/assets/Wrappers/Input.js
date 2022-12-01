import styled from "styled-components"

const Wrapper = styled.main`
    .row {
    margin-bottom: 1rem;
  }
.label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: green;
    margin-top:1.5rem;
  }
  .label-1 {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: white;
    margin-top:1.5rem;
  }
.input,
.textarea,
.select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  background: #f0f4f8;
  border: 1px solid #bcccdc;

  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.20 );
backdrop-filter: blur( 4.5px );
-webkit-backdrop-filter: blur( 4.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


}
.input,
.-select,
.block {
  height: 35px;
}

`
export default Wrapper