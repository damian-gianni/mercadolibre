import { useState } from 'react';
import { useRouter } from 'next/router'
import { Grid, Cell } from "styled-css-grid";
import t from "../utils/translation";
export default ({ action = '/items' }) => {
    const router = useRouter()
    const [query, setQuery] = useState('');

    const preventDefault = f => e => {
        e.preventDefault();
        f(e);
    }

    const handleSubmit = preventDefault(() => {
        router.push({
            pathname: action,
            query: { search: query },
        })
    })

    return (
        <form onSubmit={handleSubmit}>
            <Grid className="search-content" columns={"50px 1fr 42px"} justifyContent="center">
                <Cell className="logo-content" center middle>
                    <img className="logo-header blurred lazy-loading" data-src="/static/img/logo_small.png" src="/static/img/logo_small.png" />
                </Cell>
                <Cell center middle>
                    <input
                        className="input-search"
                        type="text"
                        placeholder={t('search.placeholder')}
                        name='q'
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </Cell>
                <Cell center middle>
                    <button onClick={handleSubmit} className="search-button">
                        <i className="fas fa-search" />
                    </button>
                </Cell>
            </Grid>
        </form>
    )
};
