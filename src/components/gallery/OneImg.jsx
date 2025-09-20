import { useModal } from "../../context/ModalContext";
import { axiosInstance } from "../../utils/instance";
function OneImg(props) {
    const { galery, description, title, className } = props
    if (!galery) return null;
    const { openModal } = useModal()
    return (
        <>
            <div
                onClick={() => openModal(props)}
                className={`w-full overflow-hidden cursor-pointer ${className}`}>
                <img
                    src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                    className={`w-full h-full max-h-[594px] object-cover rounded-[15px]`}
                    alt={title}
                />
            </div >
        </>
    )
}


export default OneImg;
