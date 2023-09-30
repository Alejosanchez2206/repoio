'use client'
import "./button.css"


function Button() {
  const downloadFile = () => {
    fetch('abp.apk').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'abp.apk';
          alink.click();
      })
  })
   
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