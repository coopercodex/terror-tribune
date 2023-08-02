import { Box } from '@mui/material'
import Featured from '../../components/featured'
// import React from 'react'

type Props = {}

const FrontPage = (props: Props) => {
  return (
    <Box  sx={{height: '100%', backgroundColor: 'white', marginTop: 15}}>
      <Featured />
    </Box>
  )
}

export default FrontPage