import './Card.scss'

export const Card = ({ id, src }) => {
    return (
        <div className="card" id={id}>
            <img src={src} alt={''}/>
        </div>
    )
}
