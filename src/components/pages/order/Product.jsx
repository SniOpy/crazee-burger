export default function Product({title, imageSource, price}) {
  return (
    <div className="product">
              <div className="image">
                <img src={imageSource} alt={title} />
              </div>
              <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                  <div className="price">{price} €F</div>
                  <button className="add-button">Ajouter</button>
                </div>
              </div>
            </div>
  )
}
