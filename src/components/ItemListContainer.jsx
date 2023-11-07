/* eslint-disable react/prop-types */


export const ItemListContainer = ( {children} ) => {
    return (
        <div className=" flex flex-wrap text-center items-center content-center justify-center">
            <h1 className=" text-3xl font-bold p-4"> Nuestros vehículos</h1>
            <section className=" flex flex-wrap">
                {children }
            </section>
        </div>
    );
}


