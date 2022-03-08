const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras arañas'
    },
}

export const buscarHeroe = (  id, callback ) => {

    const heroe = heroes[id];

    if( heroe ) {
        callback( null, heroe );
    } else {
        // Un error
        callback(`No existe un heroe con el id ${ id }`);
    }

    // callback( heroe );

}

// export { buscarHeroe };


