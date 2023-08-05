// import React from 'react'
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import requests from "../../api/requests"
import { useTheme } from "@mui/material"


type Props = {}


const Featured = (props: Props) => {
  const { palette } = useTheme()
  const [movies, setMovies] = useState([])
  const baseUrl = "https://image.tmdb.org/t/p/original"

  const getData = () => {
    fetch(requests.horrorMovies)
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        )
      )
      .catch((err) => console.log(err))
  }
  console.log(movies)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'flex-end', color: "white", background: `url(${baseUrl}${movies?.backdrop_path || movies?.poster_path})`, objectFit: "cover", backgroundPosition: 'center', minHeight: "75%"}}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
        <img
          className="justin-picture"
          height={300}
          width={400}
          style={{ objectFit: "contain" }}
          src={`${baseUrl}${ movies?.poster_path || movies?.backdrop_path}`}
          alt={movies?.name}
          />
        <Typography variant="h1" display={'flex'} justifyContent={'center'}>
          {movies?.title || movies?.name || movies?.original_name}
        </Typography>
          <Box sx={{maxWidth:'75%', fontSize: 20}}>{movies.overview}</Box>
      </Box>
    </Box>
  )
}

export default Featured
