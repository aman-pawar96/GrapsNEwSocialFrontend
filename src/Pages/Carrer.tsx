import NavigationBar from "../Components/NavigationBar";
import { useHistory } from "react-router";
import {Card,CardContent,CardActions,CardHeader,Button,Box,Grid} from '@material-ui/core'
import { useEffect,useState } from "react";
import axios from 'axios'
export default function Carrer(){

    let history=useHistory();
    const [openPosistions,setOpenPosistions]:any=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/demo/vacancies')
        .then((response)=>{
            console.log(response);
            setOpenPosistions(response.data.body)
        })

    },[])
    
    return(
        <div style={{background:"#000000"}}>
            <NavigationBar/>
            <Box m={2} p={2}>
            <Grid container spacing={2}>
            {
                openPosistions.map((position:any)=>{
                    return(
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box m={1} p={1}>
                            <Card variant="outlined">
                                <CardHeader
                                    title={position.posName}
                                    subheader={position.minexp + "+ Years"}
                                />
                                    
                                <CardContent>
                                Description:{position.des}

                                </CardContent>
                                <CardActions>
                                    <Button 
                                        onClick={()=>{history.push(`/apply/${position.id}`)}}
                                        size="small" 
                                        style={{background:"#000000",color:"#FFFFFF"}}>
                                        Apply
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                        </Grid>
                    )
                })
            }
            </Grid>
            </Box>
        </div>
            
    );
}