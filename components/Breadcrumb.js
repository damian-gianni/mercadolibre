export default ({ categories }) => {
    // Esto es porque el test pide solo una categoría para el breadcrumb
    const category = [categories[0]];
    return categories && <div className="breadcrumb">{category.join(' / ')}</div>
}