import { useModal } from '../../context/ModalContext';
import { axiosInstance } from '../../utils/instance'

function FullImg(props) {
    const { galery, description, title } = props;
    if (!galery) return null;
    const {openModal} = useModal()
    return (
        <>
            <div onClick={()=> openModal(props)} className='w-full col-span-12'>
                <img
                    src={`${axiosInstance.defaults.baseURL}${galery[0]}`}
                    className="w-full object-cover max-h-[594px] rounded-[15px]"
                    alt={title}
                />
            </div>
        </>
    )
}

export default FullImg