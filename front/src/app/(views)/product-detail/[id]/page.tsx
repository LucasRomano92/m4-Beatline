import React from 'react'

export default async function Page(props: {
    params: Params<{ id: string }>;
    searchParams: SearchParams;
}) {
    const { id } = await props.params;
    return (
        <div>pagina Producto - {id}</div>
    );
}

