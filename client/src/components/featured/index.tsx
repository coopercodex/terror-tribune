// import React from 'react'
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import requests from "../../api/requests"
import { useTheme } from "@mui/material"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

type Props = {}

const Featured = (props: Props) => {
  const { palette } = useTheme()
  const [movies, setMovies] = useState([])
  const baseUrl = "https://image.tmdb.org/t/p/original"

  const getData = () => {
    fetch(requests.horrorMovies)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))
  }
  console.log(movies)

  useEffect(() => {
    getData()
  }, [])

 
  // const handleDragStart = (e) => e.preventDefault()
  const items = movies?.map((i) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "white",
        background: `url(${baseUrl}${i?.backdrop_path || i?.poster_path})`,
        objectFit: "cover",
        backgroundPosition: "center",
        minHeight: "75%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <img
          className="justin-picture"
          height={300}
          width={400}
          style={{ objectFit: "contain" }}
          src={`${baseUrl}${i?.poster_path || i?.backdrop_path}`}
          alt={i?.name}
        />
        <Typography variant="h1" display={"flex"} justifyContent={"center"}>
          {i?.title || i?.name || i?.original_name}
        </Typography>
        <Box sx={{ maxWidth: "75%", fontSize: 20 }}>{i.overview}</Box>
      </Box>
    </Box>
  ))

  return (
    <AliceCarousel
      items={items}
      animationType="fadeout"
      animationDuration={800}
      autoPlayStrategy="none"
      infinite
      mouseTracking
      disableDotsControls
      touchTracking={true}
    />
  )
}

export default Featured
