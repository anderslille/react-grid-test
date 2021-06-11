import React from 'react';


const columns = 6;

export const Grid = () => {
    return <>
        <div className="wrapper" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px', gridAutoRows: 'minmax(100px, auto)' }}>
            <div className="cell" style={{ gridColumn: '1 / 6', gridRow: '1' }}>Top</div>
            <div className="cell" style={{ gridColumn: '1', gridRow: '2 / 5' }}>left</div>
            <div className="cell" style={{ gridColumn: '2 / 6', gridRow: '2 / 4' }}>right</div>
            <div className="cell" style={{ gridColumn: '2 / 6', gridRow: '4 / 4' }}>right</div>
        </div>
        <div>
            <table style={{ border: '1px solid', height: 500, width: 500 }}>
                <tr><td colSpan={3}></td>sddsf</tr>
                <tr><td rowSpan={2}>ertyeyt</td></tr>
                <tr><td>2</td><td>3</td></tr>
            </table>
        </div>
    </>
}