import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  background: #0a0a0a;
  color: #f2f2f2;
  text-align: center;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

const MarkdownResult = ({ content }) =>
    <Container>
        <Title>Preview</Title>
        <ResultArea>
            <Markdown
                source={content}
            />
        </ResultArea>
    </Container>

export default MarkdownResult;