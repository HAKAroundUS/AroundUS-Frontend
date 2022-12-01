import styled from 'styled-components'


const Wrapper = styled.main`

    background: #fff;
    border-radius: 0.25rem;
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-bottom: 1rem;
    
    header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #d9e2ec;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    
    
    
  }
  header h5 {
    letter-spacing: 0;
  }
  .main_icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #8e44ad;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    margin-right: 2rem;
  }
  .info{
    display: grid;
    grid-template-columns: 1fr auto;
    row-gap: 0.5rem;
  }
  .info h3 {
    margin-bottom: 0.25rem;
  }
   .info p {
      margin: 0;
      text-transform: capitalize;
      color: #829ab1;
      letter-spacing: 1px;
    }
  
  
  .content {
    padding: 1rem 1.5rem;
  }
  .content_center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;

    
  }
  .status {
    border-radius: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    /* margin-top: 1rem; */
    display: flex;
    /* justify-content: left; */
    align-items: flex-start;
  }
  
  .actions{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-right: 1rem;
  }
    
  .edit_btn,
  .delete_btn {
    letter-spacing: 1px;
    border: transparent;
    border-radius:  0.25rem;
    cursor: pointer;
    height: 30px;
    padding: 0.375rem 0.75rem;
    box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    text-decoration: none;
   transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
    text-align: center;
  }
  .edit_btn {
    color: #0f5132;
    background: #d1e7dd;
    /* margin-top: 0.5rem; */
    margin-right: 0.5rem;
    
  }
  .delete_btn {
    color: #842029;
    background: #f8d7da;
  }
  .delete_btn:hover .actions {
    visibility: visible;
  }

  @media (min-width: 576px) {
    .content_center{
      grid-template-columns: 1fr 1fr;

    }
  }
  @media (min-width: 992px) {
    .content_center{
      
      grid-template-columns: 1fr;

    }
  }
  @media (min-width: 1120px) {
    .content_center{
      
      grid-template-columns: 1fr 1fr;
    }
    
  }

`

export default Wrapper