import classNames from 'classnames/bind'
import styles from './row.module.scss'

let cx= classNames.bind(styles)

const Row = ({children, mb}) => {
    let rowClasses= cx({
        row : true,
        [`margin-bottom-${mb}`] : mb
    })
    return <div className ={rowClasses}>{children}</div>
}
export default Row