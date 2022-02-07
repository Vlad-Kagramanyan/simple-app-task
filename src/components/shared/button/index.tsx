import './styles.scss'

const Button = ({name, onClick, className}:any) => {
    return (
        <button className={`button ${className ?? ''}`} onClick={onClick}>{name}</button>
    )
}

export default Button