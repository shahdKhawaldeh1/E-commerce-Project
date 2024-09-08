import React, { useState } from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../../hooks/useSearch'

export const SearchBox = () => {
    const [userInput, setUserInput] = useState('')
    const { handleProductsPage } = useSearch(userInput);
    const handleKey = (event) => {

        if (event.key === 'Enter') {
            handleProductsPage();
            setUserInput('')
        }
    }
    const handleUserInput = (event) => {
        setUserInput(event.target.value)
    }
    return (
        <>
            <InputBase
                value={userInput}
                onChange={handleUserInput}
                onKeyPress={handleKey}
                startAdornment={
                    <InputAdornment
                        position="start"
                    >
                        <IconButton sx={{ color: 'TypeHighEmphasis.main' }} onClick={handleProductsPage}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
                inputProps={{ 'aria-label': 'enter text' }}
                sx={{ width: '100%' }}
            />
        </>
    );
};