import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 50%;
    height:100%;
    border-right: 1.5px solid black;
    padding: 13px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
    background: #0a0a0a;
    color: #f2f2f2;
    text-align:center;
    margin-bottom: 1em;
    padding: 8px 0;
`;

const TextArea = styled.textarea`
    width: 100%;
    height:100%;
    background:none;
    border: none;
    resize: none;
    outline: none;
    font-size: 17px
`;

const MarkedInput = ({ onChange }) =>
    <Container>
        <Title>Input</Title>
        <TextArea onChange={onChange} />
    </Container>

export default MarkedInput;