'use client'
import "./button.css"


function Button() {
  const downloadFile = () => {
    window.location.href = "https://download1581.mediafire.com/zodxz2zmqgsgdvwLWT7eEHfrOXdf-APz9YukO9yFI3HYpULNdGQdCpJfAtAinKS7gQzTUs80IhVQei6u2FqAnSlxBr88kV7QO4_hKCWk3pgghwrn-RHERLnlSvE-JkkbgZYlfnsmTmOsqcJpYi_Kl6LwIV0QY1hAmClb1HvssjFpPQ/kgmcmavlbzee8wj/app-release.apk"
  }
  return (
   
      <button
        className="buttonDolloawn"
        onClick={() => downloadFile()}
      >
        Descargar
      </button>
   

  )
}

export default Button