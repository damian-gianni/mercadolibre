import { Grid, Cell } from "styled-css-grid";

export const formatPrice = (amount, currency) => 
    amount.toLocaleString('es-ar', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    });

export default ({ data }) => {

    return (
        <Grid columns={'100px 1fr'} className="item">
            <Cell width={1}>
                <img className="item-thumbnails" src={data.picture} data-src={data.picture} />
            </Cell>
            <Cell width={1} height={1} className="item-price">
                <label>
                    {formatPrice(data.price.amount, data.price.currency)}
                    {data.free_shipping && <div className="bullet" />}
                </label>
                <div className="item-title">
                    {data.title}
                </div>
            </Cell>
        </Grid>
    );
}