import React from "react"
import questions from "./Data"
import Question from "./Question"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: "100vh",
        width: "100vw" 
      }}
    >
        <Box
          sx={{
            backgroundColor: "#fefefe",
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center', 
            width: "700px",
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
        >
          <Typography
              variant="h3"
              sx={{
                paddingBottom: "30px"
              }}
          >Q&A section
          </Typography>
          {questions.map(
            question => <Question key={question.id} {...question} />
          )}
        </Box>
    </Box>
  );
}

export default App;
