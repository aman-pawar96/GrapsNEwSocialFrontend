import NavigationBar from "../Components/NavigationBar"
import {useState,useEffect} from 'react'
import axios from "axios";
import { Box,makeStyles } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid'


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",
    },
}));

export default function Candidature(){

    const classes= useStyles();
    const [loading,setLoading]=useState(true);
    const [applications,setApplications]=useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/demo/applications`)
        .then((response)=>{
            setApplications(response.data.body);
            setLoading(false);
        })
    },[])
    
    const columns=[
        {
            field:"posName",
            headerName:"Position",
            width:250,
        },
        {
            field:"name",
            headerName:"Name",
            width:300,
        },
        {
            field:"email",
            headerName:"Email",
            width:200,
        },
        {
            field:"matchScore",
            headerName:"Match Score",
            width:200,
        },
        {
            field:"exp",
            headerName:"Candidate Experience",
            width:200,
        },
        {
            field:"skills",
            headerName:"Candidate Skills",
            width:200,
        }
    ]

    return(
        <div style={{background:"#000000",color:"#FFFFFF"}}>
            <NavigationBar/>
            <Box m={1} p={1}>
                <div style={{height:500}}>
                <DataGrid
                rows={applications}
                columns={columns}
                loading={loading}
                style={{color:"#FFFFFF"}}
                />
                </div>
            </Box>
        </div>
    )
}