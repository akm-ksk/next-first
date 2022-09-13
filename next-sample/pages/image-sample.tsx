import {NextPage} from "next";
import Image from "next/image";

import Image02 from '../public/images/img02.jpeg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1 className="ii23">画像表示</h1>
            <p>imgタグ</p>
            <img src="/images/img01.jpeg" alt=""/>
            <p>Imageコンポーネント</p>
            <Image src={Image02}/>
            <p>Imageで表示</p>
        </div>
    )
}

export default ImageSample