import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Directory from './directory.component';
import Spinner from '../spinner/spinner.component';

const GET_SECTIONS = gql`
  query getSections {
    getSections {
      id
      title
      imageUrl
      linkUrl
    }
  }
`;

const DirectoryContainer = () => (
  <Query query={GET_SECTIONS}>
    {({ loading, data: { sections } }) => {
      console.log(sections, loading);
      if (loading) {
        return <Spinner />;
      }
      if (!loading) {
        return <Spinner />;
      }
      return <Directory sections={sections} />;
    }}
  </Query>
);

export default DirectoryContainer;
