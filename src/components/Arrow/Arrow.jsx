import React from 'react';

const Arrow = (props) => {
    const {
        total,
        page,
        setPage,
        arrowClass,
    } = props;

    let arrowDisabledClass = 0;
    let arrowCallback = 0;

    if (arrowClass === 'pagination-item_next') {
        if (page + 1 !== Math.ceil(total / 10)) {
            arrowDisabledClass = ''
            arrowCallback = () => setPage(page + 1);
        } else {
            arrowDisabledClass = 'pagination-item_disabled'
            arrowCallback = null;
        }
    }

    if (arrowClass === 'pagination-item_last') {
        if (page + 1 !== Math.ceil(total / 10)) {
            arrowDisabledClass = ''
            arrowCallback = () => setPage(Math.ceil(total / 10) - 1);
        } else {
            arrowDisabledClass = 'pagination-item_disabled'
            arrowCallback = null;
        }
    }

    if (arrowClass === 'pagination-item_prev') {
        if (page !== 0) {
            arrowDisabledClass = ''
            arrowCallback = () => setPage(page - 1);
        } else {
            arrowDisabledClass = 'pagination-item_disabled'
            arrowCallback = null;
        }
    }

    if (arrowClass === 'pagination-item_first') {
        if (page !== 0) {
            arrowDisabledClass = ''
            arrowCallback = () => setPage(0);
        } else {
            arrowDisabledClass = 'pagination-item_disabled'
            arrowCallback = null;
        }
    }

    return (
        <div
            onClick={arrowCallback}
            className={`pagination-item ${arrowClass} ${arrowDisabledClass}`
            }>
        </div>
    );
}

export default Arrow;
