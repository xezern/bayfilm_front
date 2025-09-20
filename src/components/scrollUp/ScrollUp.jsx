import { IoCaretUp } from 'react-icons/io5'

function ScrollUp() {
    return (
        <>
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='fixed md:bottom-[50px] bottom-4 md:right-[50px] right-4 bg-[#ff5e00] text-[#fff6c3] p-3 rounded-full cursor-pointer hover:bg-[#fff6c3] hover:text-[#ff5e00] transition ease-in-out duration-500 shadow-2xl'>
                <IoCaretUp />
            </div>
        </>
    )
}

export default ScrollUp