import styled from 'styled-components'

const Wrapper = styled.main`
  background: #fff;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 80%;
  margin: 2rem auto;
  /* height: 83vh; */
  /* height: 90vh; */
  border-top: 4px solid green;
  h2 {
    padding: 1rem;
  }
  .profile {
    flex: 2;
    /* background-color: red; */
  }
  .list {
    flex: 3;
    background-color: whitesmoke;
    overflow: scroll;
  }
  .leaflet-owner {
    flex: 3;
    overflow: hidden;
  }
  .details {
    padding: 1rem;
  }
  .add-shop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cl-btn {
    width: 90%;
  }
  .child {
    width: 90%;

  }
  .in-form {
    width: 100%;
    border-top: 4px solid green;
    /* // Extra */
    height: 52vh;
    /* overflow: scroll;  */
    padding-top: 0rem;
    padding-bottom: 0;
    margin-top: 1.5rem;
  }
  .select-location{
    margin-bottom: 0rem;
    margin-top: 2rem
  }
  .shops {
    /* display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    /* padding: 1rem;
    /* flex-wrap: wrap; 
    /* margin: 2px; */
    display : inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: normal;
    align-content: normal;
  }
  .member-btn {
    margin-top: 0.5rem;
    width: 100%;
  }
  .reviews {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    /* background-color: skyblue; */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin: 2rem 1rem;
    padding: 3rem 1rem;
    border-radius: 0.25rem;
  }
`;

export default Wrapper