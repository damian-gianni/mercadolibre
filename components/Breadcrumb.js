export default ({ categories }) => {
    return categories && <div className="breadcrumb">{categories.join(' / ')}</div>
}