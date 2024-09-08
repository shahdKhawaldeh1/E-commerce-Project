import React from 'react';
import HandpickedCard from './HandpickedCard/HandpickedCard';
import { Box, Paper, Typography } from "@mui/material";
import { HandpickedCollectionsStyledBox, HandpickedCollectionsStyledPaper } from "./style";
import useCategories from '../../../hooks/useCategories';
import LoadingProgress from "../../Loading/LoadingProgress";
import { useHandpickedCollection } from "../../../hooks/useAppAPIs";

const HandpickedCollections = (props) => {
    const { innerRef } = props;
    const { data: Handpicked, isLoading } = useHandpickedCollection();
    let filteredHandpicked = [];

    if (Handpicked) {
        filteredHandpicked = Handpicked.filter(item => {
            return item.name === "Handbags" || item.name === "Personal Care" || item.name === "Watches" || item.name === "Eye Wear";
        });
    }
    const { categoryData } = useCategories();
    const categoriesData = categoryData?.categories;
    return (
        <Paper
            role="region"
            aria-label="Handpicked Collections Section"
            component={'section'}
            ref={innerRef}
            sx={HandpickedCollectionsStyledPaper}
        >
            {isLoading && <div role="alert" aria-busy="true">
                <LoadingProgress />
            </div>}
            <Typography
                component={'h2'}
                variant={'h2'}
                sx={{ marginLeft: '1rem', color: 'primary.contrastText', marginTop: '2rem', marginBottom: '2rem' }}
            >
                Handpicked Collections
            </Typography>
            <Box sx={HandpickedCollectionsStyledBox}> 
                {categoriesData?.map((item) =>
                    <HandpickedCard key={item.id} collection={item}  />
                )}
            </Box>
        </Paper>
    );
};

export default HandpickedCollections;
