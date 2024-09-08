
export const RatingBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem',
    '@media (min-width: 320px) and (max-width: 768px)': {

    },
}

export const QuantityContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '1rem',
    '@media (min-width: 320px) and (max-width: 768px)': {
        margin: '0',
        marginLeft: '1rem',
        gap: '5px',
    },
}

export const QuantityActionBoxStyle = {
    display:'flex',
    justifyContent:'space-around',
    marginTop: '4rem',
    maxWidth:'600px',
    gap: '24px',
    '@media (min-width: 320px) and (max-width: 425px)': {
        marginTop: '2rem',
        gap: '0',
    },
}

export const QuantityActionButtonsStyle = {
    width: '330px',
    '@media (min-width: 320px) and (max-width: 375px)': {
        width: '115px',
        fontSize: '20px',
    },
    '@media (min-width: 376px) and (max-width: 599px)': {
        width: '140px',
        fontSize: '20px',
    },
}