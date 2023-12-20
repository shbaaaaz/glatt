const MenuItemCard = ({ menuItem }) => {
  const { name, description, category, price, defaultPrice, imageId } = menuItem

  return (
    <div>
      <h3>{name}</h3>
      <p>{(price || defaultPrice) / 100}</p>
      <p>{description}</p>
    </div>
  )
}

export default MenuItemCard
