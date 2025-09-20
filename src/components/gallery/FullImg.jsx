import { axiosInstance } from '../../utils/instance'

function FullImg({ galery, description, title }) {
    if (!galery) return null;

    return (
        <>
            <div className='w-full col-span-12'>
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