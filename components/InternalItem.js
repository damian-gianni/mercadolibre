import { Grid, Cell } from "styled-css-grid";
import t from "../utils/translation";
import { formatPrice } from "./Item";
export default ({ item }) => {
    return (
        item && <section className="internal-item">
            <Grid className="internal-item-grid" columns={'100%'}>
                <Cell>
                    <img className="internal-item-image" src={item.picture} />
                </Cell>
                <Cell className="internal-item-description">
                    <label>{t(item.condition)}</label>
                    <div className="internal-item-title">{item.title}</div>
                    <div className="internal-item-price">{formatPrice(item.price.amount, item.price.currency)}</div>
                </Cell>
                <Cell className="internal-item-description">
                    <h2>Descripción del producto</h2>
                    <p>{item.description}</p>
                </Cell>
            </Grid>
        </section>
    );
}