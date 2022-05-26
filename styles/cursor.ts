import styled from "styled-components";

const DotOutline = styled.div`
width: 40px;
height: 40px;
background: linear-gradient(61.69deg, #EB5757 13.74%, #F2994A 88.78%);;
pointer-events: none;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 50%;
opacity: 1;
transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const Dot = styled.div`
pointer-events: none;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity: 0;
`;

export { DotOutline, Dot };
