import { useEffect } from "react"
import { FaXmark } from "react-icons/fa6";
import { useModal } from "../../context/ModalContext";
import { useMatchMedia } from "../../hooks/use-matchmedia";

export default function OpenGalery() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'initial';
        }
    })
    const isMatchLG = useMatchMedia('(max-width: 768px)')
    if (isMatchLG) return <MobileOpenGalery />
    return <DescOpenGalery />
}

function MobileOpenGalery() {
    const { handleModal, image } = useModal()
    const path = import.meta.env.VITE_BASE_URL
    const imgUrl = path + image?.galery[0]
    return (
        <article
            style={{
                'backgroundImage': `url('${imgUrl}')`
            }}
            className='fixed z-[999] inset-0 overflow-auto'>
            <span onClick={handleModal} className="fixed right-5 top-5 border-[white] border-[2px] cursor-pointer rounded-full">
                <FaXmark className="text-[24px] text-white" />
            </span>
            <div style={{
                'backgroundImage': `url('${imgUrl}')`,
                'backgroundAttachment': 'fixed',
                'backgroundPosition': 'center',
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat',
            }} className="min-h-[calc(100vh-50px)]"></div>
            <div className="text-black bg-[#fff6c3]  p-4 rounded-t-[8px] ">
                <h3 className="border-b-[3px] text-[20px] mb-[16px]">
                    {image?.title}
                </h3>
                {image.description}
                <p className="my-4" onClick={handleModal}>
                    <button className="border-[3px] border-[#000] transition-all duration-[350ms] w-full cursor-pointer text-[20px] min-h-10 rounded-[6px] hover:bg-[#000] hover:text-[#fff6c3]">Close</button>
                </p>
            </div>
        </article >
    )
}

function DescOpenGalery() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'initial';
        }
    })
    const { handleModal, image } = useModal()
    const path = import.meta.env.VITE_BASE_URL
    const imgUrl = path + image?.galery[0]
    const isFull = image.type === 'FULL'
    return (
        <article
            onClick={handleModal}
            className='fixed z-[999] bg-[#000000cc] inset-0 h-screen grid overflow-auto place-items-center py-[40px]'>
            <div onClick={e => e.stopPropagation()}
                className={`bg-[#fff6c3] max-w-[836px] w-[90%] relative rounded-2xl flex ${isFull && 'max-w-[1400px]'}`}>
                <span onClick={handleModal} className="absolute right-5 top-5 border-[2px] cursor-pointer rounded-full">
                    <FaXmark className="text-[24px] text-black" />
                </span>
                <img src={imgUrl} className="max-h-[calc(100vh-80px)] max-w-[70%] object-cover rounded-2xl" alt="BAYFILM Foto cekilisi" />
                <div className="text-black p-4 rounded-t-2xl w-full max-w-[400px] text-[32px]">
                    <h3 className="border-b-[3px] mb-[16px]">
                        {image?.title}
                    </h3>
                    <p className="text-[22px]">
                        {image.description}
                    </p>
                </div>
            </div>
        </article >
    )
}