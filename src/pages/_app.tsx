import { AppProps } from 'next/app';
import { theme } from '../style/theme';
import { ChakraProvider  } from '@chakra-ui/react';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../services/queryClient';

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
