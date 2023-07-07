const validation=(data)=>{
    const errors={...data.errors}
    if(!data.titulo) 
        errors.titulo='No puede estar vacio'
    else if (data.titulo.length>20)
        errors.titulo='Muy largo'
    else errors.titulo=''

    if(!data.descPublica) 
        errors.descPublica='No puede estar vacio'
    else if (data.descPublica.length>200)
        errors.descPublica='Muy largo'
    else if (data.descPublica.length>200)
        errors.descPublica='Muy corto'
    else errors.descPublica=''

    return errors;
}
export default validation;