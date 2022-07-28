import PropTypes from 'prop-types'
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css'
import '../styles/globals.css'
import { ApolloClient , HttpLink , ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://api.spacex.land/graphql/'
  })
})

function MyApp ({ Component, pageProps }) {
  
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>

  
}
MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.func.isRequired
}

export default MyApp
