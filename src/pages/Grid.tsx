import React from 'react';


const columns = 6;

export const Grid = () => {
    return <>
        <div className="wrapper" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px', gridAutoRows: 'minmax(100px, auto)' }}>
            <div className="cell" style={{ gridColumn: '1 / 7', gridRow: '1' }}>Top</div>
            <div className="cell" style={{ gridColumn: '1', gridRow: '2 / 5' }}>left</div>
            <div className="cell" style={{ gridColumn: '2 / 7', gridRow: '2 / 4' }}>right</div>
            <div className="cell" style={{ gridColumn: '2 / 7', gridRow: '4 / 4' }}>right</div>
            <div className="cell" style={{ gridColumn: '1 / 7', gridRow: '5 / 7' }}>bottom</div>
        </div>
    </>
}