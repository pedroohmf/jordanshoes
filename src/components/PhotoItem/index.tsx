import { TennisType } from "@/types/TennisType"

type Props = {
    photo: TennisType;
}

export const PhotoItem = ({ photo }: Props) => {
    return (
        <li className="lg:h-72 lg:w-96 bg-photoItem flex justify-center items-center">
            <img className="lg:h-36 lg:w-64 " src={`/assets/${photo.url}`} alt="but" />
        </li>
    )
}