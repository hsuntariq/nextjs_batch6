import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const loading = () => {
    return (
        <>
            <div className="flex justify-center items-center">

                <Skeleton width={500} />
                <Skeleton width={500} />
                <div className="flex">
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                    <Skeleton width={50} />
                </div>
            </div>

        </>
    )
}

export default loading