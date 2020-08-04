import ThemeProvider, { ReactUI } from '@warren/ui/src/Theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ReactUI}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
