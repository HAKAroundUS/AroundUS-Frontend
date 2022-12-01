import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    .nav{
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
    }
    .map{
        /* position: absolute; */
        z-index: 0;
    }

`

export default Wrapper