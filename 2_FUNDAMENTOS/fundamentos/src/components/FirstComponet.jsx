import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return( //É o que vai retornar
    // Esse comentário funciona.
    /*
        Esse também
    */
        <>
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu nome</p>
            <MyComponent />
        </>
    )
}

// A div é obrigatória.

export default FirstComponent //Exportando esse componente para importar em outros arquivos.