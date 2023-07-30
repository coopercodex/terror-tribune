import { useMemo } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { Box, CssBaseline, Fab } from "@mui/material"
// import { useTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./scenes/frontPage"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "./components/scroll"
import Navbar from "./components/navbar"

type Props = {}

function App(props: Props) {
  const theme = useMemo(() => createTheme(themeSettings), [])
  // const { palette } = useTheme()

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar />
              <Routes>
                <Route path="/" element={<FrontPage />} />
              </Routes>
            </Box>
            <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
