import styled from 'styled-components'



const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* padding-top: 50px; */}
    
    /* background-position: center; */
   
    height: 100vh;
    /* background-color: var(--green-light); */
    background: url('./bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    /* background-position; */
    border-right: 3px solid green;
    

  h1{
    color: green;
  }
    .logo{
        color: green;
        
        /* margin-bottom: 2%; */
        display: hidden;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        ${'' /* margin-bottom: 40px; */}
    }
    .logo img{
      opacity: 0;
        width: 100%;
        height: 100%;
    }
    .form {
    width: 400px;
    max-width: 400px;
    border-top: 5px solid green;
    /* align-items: center; */
    
  }
  
  .formcenter {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .search{
      ${'' /* padding: 10% 0 10% 0; */}
      padding: 2rem 0.5rem;
      ${'' /* margin: 0 2%; */}
      align-items: center;
      text-align: center;
      overflow: hidden;
      /* background: rgba( 255, 255, 255, 0.1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
.member-btn {
      margin-top: 1rem;
      width: 100%;
    
  }

  }
`
export default Wrapper