import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import {AccordionProps} from "./Accordion.types";
import {Product, Sizes} from "../../dataModel";

const ControlledAccordions: React.FC<AccordionProps> = (props) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box marginTop={3}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>
                        Ingredients
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        props.recipe.recipeParts.map((part) => {
                            return (
                                <Box key={part.name}>
                                    <Typography>
                                        {part.name}
                                    </Typography>
                                    {part.steps.map((step) => {
                                        return (
                                            <Typography>
                                                {step.products.map((product: Product) => {
                                                    if (product.amount) {
                                                        return (
                                                            <Box>
                                                                {product.amount} {product.name}
                                                            </Box>
                                                        )
                                                    } else {

                                                        const qtyAndSize= product?.portion?.map((portionMapped) => {
                                                            return (
                                                                <Box>
                                                                    {product.name} {portionMapped.quantity} {portionMapped.size}
                                                                </Box>
                                                            )
                                                        });
                                                        return qtyAndSize;
                                                    }
                                                })}
                                            </Typography>)
                                    })}
                                </Box>
                            )
                        })
                    }
                    <Typography variant="body1" component="p" marginTop={3}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>Recipe</Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        Steps
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>
                        Servings
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        Examples
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur cum ea
                        exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse
                        necessitatibus
                        quod saepe sequi tenetur velit.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{width: '33%', flexShrink: 0}}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default ControlledAccordions;
