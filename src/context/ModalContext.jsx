import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

export default function ModalProvaider({ children }) {
    const [image, setImage] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModal = () => {
        setIsModalOpen(p => !p)
    }

    const openModal = (item) => {
        setImage(item)
        handleModal()
    }

    const value = {
        openModal,
        handleModal,
        image,
        isModalOpen
    }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}
export const useModal = () => useContext(ModalContext)