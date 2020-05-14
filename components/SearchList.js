import Item from "./Item";

export default ({ listItems }) => {
    return (
        <section className="list-items">
            {listItems.items.map(item => (
                <Item data={item}></Item>
            ))}
        </section>
    );
}