import { useEffect, useState } from 'react'

export function Pizza() {
	const [pizza, setPizza] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setPizza('PIZZA')
        }, 2000)
        alert("Pedido realizado com sucesso!")
    }, [])

	return (
    <div>
        <h1>{pizza}</h1>
    </div>
	)
}