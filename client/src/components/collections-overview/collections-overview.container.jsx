import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.collection} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
