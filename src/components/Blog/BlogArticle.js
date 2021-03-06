import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import TransparentContainer from '../../components/Containers/TransparentContainer';
import BigTitle from '../../components/BigTitle';
import Author from '../../components/Blog/Author';
import FormatedDate from '../../components/Blog/FormatedDate';
import BigGhostButton from '../../components/BigGhostButton';
import './videoStyle.css';
import { BlogContentContainer } from './BlogContentContainer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function (props) {
  return (
    <TransparentContainer>
      <BigTitle>{props.post.frontmatter.title}</BigTitle>
      <Container>
        <Author author={props.post.frontmatter.author} />
        <FormatedDate date={props.post.frontmatter.date} />
      </Container>
      <hr />
      <BlogContentContainer dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <hr />
      <nav>
        <Container>
          {props.previous && props.previous.frontmatter.hidden !== true && (
            <Link to={'/blog/post' + props.previous.fields.slug} rel="prev">
              <BigGhostButton>
                ← {props.previous.frontmatter.title}
              </BigGhostButton>
            </Link>
          )}
          {props.next && props.next.frontmatter.hidden !== true && (
            <Link to={'/blog/post' + props.next.fields.slug} rel="next">
              <BigGhostButton>{props.next.frontmatter.title} →</BigGhostButton>
            </Link>
          )}
        </Container>
      </nav>
    </TransparentContainer>
  );
}
