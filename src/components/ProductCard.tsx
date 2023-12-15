function ProductCard ({ imgSrc, title, description, price, id }: any) {
  function normalizeTitle (title: string) {
    return title?.replace(/\s+/g, '-').toLowerCase()
  }
  return (
        <a key={id} href={`/products/${normalizeTitle(title)}-${id}`}>
            <div className="card w-full h-full bg-base-100 shadow-xl" >
            <figure>
                <img src={imgSrc} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                    <div className="badge badge-accent badge-outline">${price}</div>
                </div>
            </div>
        </div>
        </a>
  )
}

export default ProductCard
