import { useModal } from '../../context/ModalContext';
import { axiosInstance } from '../../utils/instance'

function GridImg(props) {
    const { galery, title } = props
    if (!galery) return null;
    const { openModal } = useModal()

    function handleOpen(i) {
        const obj = {
            ...props,
            galery: [galery[i]]
        }
        openModal(obj)
    }
    return (
        <div className='col-span-12'>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 md:px-[50px] lg:px-[100px]">
                {galery.map((img, index) => (
                    <div
                        onClick={e => handleOpen(index)}
                        key={index}
                        className={`w-full h-[calc(574px/2)] rounded-[20px] overflow-hidden ${(index === 0 || index === 2) ? '!h-[591px] md:row-span-2' : 'max-h-[calc(591px/2)] '}`}                    >
                        <img
                            src={`${axiosInstance.defaults.baseURL}${img}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default GridImg