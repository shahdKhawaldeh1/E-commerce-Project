

export const sectionBox = {
    margin: '1rem',
    cursor: 'pointer',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
    '@media (min-width: 320px) and (max-width: 374px)': {
        width: '120px'
    },
    '@media (min-width: 375px) and (max-width: 424px)': {
        width: '155px'
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
        width: '175px'
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
        width: '160px'
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
        width: '220px'
    },
    '@media (min-width: 1440px) ': {
        width: '320px'
    },
    ':hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
}