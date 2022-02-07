import './styles.scss'

const Alert = ({text, type}:any) => {
    return (
        <div className={`alert ${type ?? 'success'}`}><span>{text}</span></div>
    )
}

export default Alert