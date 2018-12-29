import React from 'react';
import styled from 'styled-components/macro';

const Author = styled.span`
  margin-right: 4px;
`;

const DetailAuthor = props => <Author>{props.author}</Author>;

export default DetailAuthor;