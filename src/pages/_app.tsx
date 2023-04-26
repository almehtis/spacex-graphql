import { Layout } from '@/common/Layout';
import { CookiesProvider } from 'react-cookie';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: {
            keyArgs: false,
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },
          },
        },
      }
    }
  }),

  connectToDevTools: true
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
          <main>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
      </ApolloProvider>
    </CookiesProvider>
  )
}
