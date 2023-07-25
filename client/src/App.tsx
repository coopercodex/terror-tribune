import { useMemo, useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { Box, CssBaseline } from "@mui/material"
// import { useTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./scenes/frontPage"
import Navbar from "./components/navbar"

function App() {
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
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
