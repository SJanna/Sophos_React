import { Box } from '@mui/material'
import React from 'react'
import { createPortal } from 'react-dom';

const Modal = (props) => {
  const modal_styles = {
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    createPortal(
      <Box sx={modal_styles}>
        {props.children}
      </Box>,
      document.getElementById('modal')
    )
  )
}

export default Modal