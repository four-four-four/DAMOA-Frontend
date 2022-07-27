import * as React from 'react';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const FilterViewBlock = styled.div`
    display:inline-flex;
    width: 30%;
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
`;

const FilterView = (pros) => {

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    return (
        <FilterViewBlock>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'text.disabled' }}>
                <ListItem
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle(0)}
                        inputProps={{ 'aria-labelledby': 'checkbox-list-secondary-label-0' }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                    
                    <ListItemText id='checkbox-list-secondary-label-0' primary='전체선택' />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle(1)}
                        inputProps={{ 'aria-labelledby': 'checkbox-list-secondary-label-1' }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                    
                    <ListItemText id='checkbox-list-secondary-label-1' primary='#아이폰' />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle(2)}
                        inputProps={{ 'aria-labelledby': 'checkbox-list-secondary-label-2' }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                    
                    <ListItemText id='checkbox-list-secondary-label-2' primary='#아이폰13 프로' />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    secondaryAction={
                    <Checkbox
                        edge="end"
                        onChange={handleToggle(2)}
                        inputProps={{ 'aria-labelledby': 'checkbox-list-secondary-label-2' }}
                    />
                    }
                    disablePadding
                >
                    <ListItemButton>
                    
                    <ListItemText id='checkbox-list-secondary-label-2' primary='#애플' />
                    </ListItemButton>
                </ListItem>
            </List>
        </FilterViewBlock>
    );
}

export default FilterView;