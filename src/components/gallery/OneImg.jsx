import { useState } from "react";
import { axiosInstance } from "../../utils/instance";

function OneImg({ galery, description, title, className, isShowDescription = true }) {
    if (!galery) return null;

    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className={`w-full overflow-hidden ${className} relative group`}>
            {
                description?.trim() !== '' &&
                <>
                    <div
                        onClick={handleOpen}
                        className={`transition-all duration-500 text-transparent group-hover:text-[#fff6c3] cursor-pointer grid place-items-center font-bold absolute inset-0 group-hover:bg-[#0000003f] rounded-[15px] p-2 ${!isShowDescription && 'max-lg:!hidden'}`}>
                        {!open && 'Open'}
                    </div>
                    <div
                        onClick={handleOpen}
                        className={`transition-all text-center text-[12px] md:text-[14px] xl:text-[16px] absolute bottom-0 right-0 left-0 duration-500 overflow-hidden max-h-0 p-0 bg-[#00000080] text-white rounded-[15px] px-1 md:px-2 lg:px-3 ${!isShowDescription && 'max-lg:!hidden'} ${open && 'max-h-[500px] pb-1.5 lg:pb-[12px] pt-[12px] '}`}>
                        {description}
                    </div>
                </>}
            <img
                src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                className={`w-full h-full max-h-[594px] object-cover rounded-[15px]`}
                alt={title}
            />
        </div >
    )
}


export default OneImg;
