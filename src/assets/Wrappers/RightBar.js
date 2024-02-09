import styled from "styled-components"

const Wrapper = styled.main`


 display: flex;
 align-items: center;
 flex-direction: column;
 .image{
    width: 200px;
    height: 200px;
    display: grid;
    place-items: center;
    background: #8e44ad;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    /* margin-right: 2rem; */
    margin-bottom: 1rem;
 }
 .data{
  width: 200px;
  border-top: 1px solid black;
 }
 .tags{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: whitesmoke;
        /* height: 150px; */
        margin: 1rem auto;
        border-radius: 0.25rem;
        padding: 0.5rem;
        flex-wrap: wrap;
        overflow: scroll;
 }

`

export default Wrapper