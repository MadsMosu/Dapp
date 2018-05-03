import React from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;
    static propTypes = {
      serverState: PropTypes.object.isRequired,
    };

    static async getInitialProps(ctx) {

      let serverState = {
        apollo: {
          data: {},
        },
      };

      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }


      if (!process.browser) {
        const apollo = initApollo();

        try {
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent {...composedInitialProps} />
            </ApolloProvider>,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            }
          );
        } catch (error) {
        }
        Head.rewind();

        serverState = {
          apollo: {
            data: apollo.cache.extract(),
          },
        };
      }

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    constructor(props) {
      super(props);
      this.apollo = initApollo(this.props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };
};