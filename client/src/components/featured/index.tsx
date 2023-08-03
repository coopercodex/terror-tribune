// import React from 'react'
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import requests from "../../api/requests"
import { useTheme } from "@emotion/react"

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
      sx={{ color: "white", backgroundColor:  'rgb(15, 15, 15)', height: "75%" }}
    >
        <Typography variant="h1" display={'flex'} justifyContent={'center'}>
          {movies.title || movies.name || movies.original_name}
        </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
        <img
          className="justin-picture"
          height={500}
          width={600}
          style={{ objectFit: "contain" }}
          src={`${baseUrl}${movies.backdrop_path || movies.poster_path}`}
          alt={movies?.name}
          />
          <Box sx={{maxWidth: 400, marginBottom: '15rem'}}>{movies.overview}</Box>
      </Box>
    </Box>
  )
}

export default Featured
