import React from 'react'

const Head = () => {

    React.useEffect(() => {
      document.title = "Bebecê";
      document.querySelector("meta[name='description']")
          .setAttribute('content', "Desafio para a vaga de Desenvolvedor Front-End na Wecode")
  }, [])
  return <></>

}

export default Head