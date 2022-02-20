import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function Question( {id, title, info} ) {

    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

  return (
    <Box>
        <Card
            sx={{ 
                width: "600px",
                padding: "20px" 
            }}
            elevation={6}
        >
        <Box
            sx={{
                display: "flex",
                alignItems: 'center', 
                alignContent: 'space-around',
                justifyContent: 'space-between' 
            }}
        >
            <Typography
                variant="subtitle2"
            >{title}
            </Typography>
            <Button
                onClick={toggleInfo}
            >
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </Button>
        </Box>
        <Typography
            variant="subtitle1"
            color="textSecondary"
        >{showInfo ? info : null}
        </Typography>
        </Card><br />
    </Box>
  )
}

export default Question