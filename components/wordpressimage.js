import classNames from "classnames/bind"
import Image from "next/image"
import styles from './wordpressimage.module.scss'

let cx = classNames.bind(styles)

const WordpressImage = ({data, rounded}) => {
    const {sourceUrl, mediaDetails, altText} = data
    const {width, height} = mediaDetails 
    
    let imageClasses = cx({
        rounded : false
    })

    return <Image 
                src={sourceUrl}
                width= {width}
                height={height}
                alt = {altText} 
                className={imageClasses}
                layout="responsive"
            />
}
export default WordpressImage