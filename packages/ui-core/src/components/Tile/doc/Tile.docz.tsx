import * as React from 'react';

export const wrapperStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    justifyContent: 'center',
    padding: '20px',
};

export const lightWrapperStyle = {
    ...wrapperStyle,
    backgroundColor: '#F6F6F6',
};

export const darkWrapperStyle = {
    ...wrapperStyle,
    backgroundColor: '#00B956',
};

export const tileInner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    height: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
};

export const tileInnerWhite = {
    ...tileInner,
    backgroundColor: '#FFFFFF',
    color: '#333333',
};

export const tileInnerWhiteRounded = {
    ...tileInnerWhite,
    borderRadius: 8,
};

export const DemoTileWrapper = (props: {
    wrapperShadowColor?: 'light' | 'dark';
    children: JSX.Element[] | Element[] | JSX.Element | Element | string;
}) => {
    const { wrapperShadowColor = 'light', children } = props;
    const theme = wrapperShadowColor === 'dark' ? darkWrapperStyle : lightWrapperStyle;

    return <div style={theme}>{children}</div>;
};
