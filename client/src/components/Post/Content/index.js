import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentUrl from './Url';
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  font-size: 13px;
`;

const PostContent = ({ url, title, comments, ...details }) => (
  <Wrapper>
    <PostContentTitle url={url} title={title}/>
    <PostContentUrl url={url}/>
    <PostContentDetail comments={comments ? comments.length : 0} {...details} />
  </Wrapper>
);

export default PostContent;