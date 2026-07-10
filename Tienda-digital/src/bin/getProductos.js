import { createContext, useState, useContext, useEffect } from 'react'

const URL_API = 'https://fakestoreapi.com/products'

    const getProductos = async () => {
    try {
        const response = await fetch(URL_API)
        const data = await response.json()

        if (!data) throw new Error('sin datos')
        
            return data
    }catch (error) {
        console.error('Algo fallo', error)
        return []
    }   
}
