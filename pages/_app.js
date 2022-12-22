import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../src/store/index'
import theme from '../src/theme'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import Header from '../src/component/navbar/navbar'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeStyled theme={theme}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeStyled>
    </Provider>
  )
}

export default MyApp
