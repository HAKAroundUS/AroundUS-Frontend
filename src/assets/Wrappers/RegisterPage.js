import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 1.38rem;
    /* color: green; */
  }
  .form {
    max-width: 400px;
    border-top: 5px solid green;
    border-radius: 10px;
    
  }
  .form:hover{
    transform: scale(1.05);
  }

  h3 {
    text-align: center;
    color: green;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: green;
    cursor: pointer;
    letter-spacing: 1px;
  }
`
export default Wrapper