import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const AccordionUsage = () => {
  return (
    <div style={{ maxWidth: '100%', padding: '0 20px' }}>
      <Accordion defaultExpanded sx={{ marginBottom: '10px', borderRadius: '14px', backgroundColor: '#2A2334A3', marginTop: "39px", maxWidth:"100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ minHeight: '8px', height: '70px', textAlign: 'center' }}
        >
          <span style={{ color: 'white', fontSize: "22px", fontFamily: "satoshi" }}>Correlation Analysis</span>
        </AccordionSummary>
        <AccordionDetails>
          <div className="line" style={{ borderBlockStart: "2px solid white", marginBottom: "25px" }}></div>
          <span style={{ color: 'grey', fontSize: "18px", fontFamily: "satoshi" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '10px', borderRadius: '14px', backgroundColor: '#2A2334A3',  }}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" style={{    minHeight: '8px',
            height: '70px',
            textAlign: 'center'}}
        >
          <span style={{ color: 'white', fontSize:"22px", fontFamily:"satoshi" }}>Correlation Analysis</span>
        </AccordionSummary>
        <AccordionDetails>
            <div className="line" style={{borderBlockStart:"2px solid white", marginBottom:"25px"}}></div>
            <span style={{ color: 'grey', fontSize:"18px", fontFamily:"satoshi" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ marginBottom: '10px', borderRadius: '14px', backgroundColor: '#2A2334A3',}}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" style={{    minHeight: '8px',
            height: '70px',
            textAlign: 'center'}}
        >
          <span style={{ color: 'white', fontSize:"22px", fontFamily:"satoshi" }}>Correlation Analysis</span>
        </AccordionSummary>
        <AccordionDetails>
            <div className="line" style={{borderBlockStart:"2px solid white", marginBottom:"25px"}}></div>
            <span style={{ color: 'grey', fontSize:"18px", fontFamily:"satoshi" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
        </AccordionDetails>
      </Accordion>

      <Accordion  sx={{ marginBottom: '10px', borderRadius: '14px', backgroundColor: '#2A2334A3', }}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header" style={{    minHeight: '8px',
            height: '70px',
            textAlign: 'center'}}
        >
          <span style={{ color: 'white', fontSize:"22px", fontFamily:"satoshi" }}>Correlation Analysis</span>
        </AccordionSummary>
        <AccordionDetails>
            <div className="line" style={{borderBlockStart:"2px solid white", marginBottom:"25px"}}></div>
            <span style={{ color: 'grey', fontSize:"18px", fontFamily:"satoshi" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default AccordionUsage;
