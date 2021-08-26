import NavigationBar from "../Components/NavigationBar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {Grid,Box,TextField,makeStyles,Button} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import { useHistory } from "react-router";

import Popup from '../Components/Popup/Popup';

const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",
    },
}));
export default function Apply(){
    const {id}:any=useParams();
    let history= useHistory();

    const classes= useStyles();
    const [posDetail,setPosDetail]:any=useState({});
    const [candidateDetails,setCandidateDetails]:any=useState({});
    
    const [msg,setMsg]=useState("")
    const [openpopup,setOpenPopup]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get(`http://localhost:4000/demo/vacancy/${id}`)
        .then((response)=>{
            console.log(response);
            setPosDetail(response.data.body);
            setLoading(false);
        });

    },[])

    const handleSubmit =(event:any)=>{
        event.preventDefault();
        let details=candidateDetails
        details["id"]=id
        details["posName"]=posDetail.posName
        axios.post(`http://localhost:4000/demo/newApplication`,
        {
            data:details,
            minexp:posDetail.minexp,
            totalSkills:posDetail.skills.length
        })
        .then((response)=>{
            console.log(response);
            setMsg(response.data.message);
            setOpenPopup(true);
        })
    }

    const handleChanges = (key:string,value:any)=>{
        let details=candidateDetails;
        details[key]=value;
        setCandidateDetails(details);

    }
    return(
        <div style={{background:"#000000"}}>
            <NavigationBar/>
            <Box m={1} p={1}>
            </Box>
            {!loading?(<Grid container>
                <Grid item xs={1} md={3} lg={3} sm={3} >
                </Grid>
                <Grid item xs={10} md={6} lg={6} sm={6} >
                    <Box m={1} p={1} borderRadius={10} border={5} borderColor="#FFFFFF">
                        <div style={{fontSize:30, color:"#FFFFFF", textAlign:"center"}}>
                            {posDetail.posName}
                        </div>
                        <Box m={1} p={1}>
                        </Box>
                        <Box m={1} p={1} borderRadius={10} border={2} borderColor="#FFFFFF">
                            <div style={{fontSize:20, color:"#FFFFFF", textAlign:"center"}}>
                                <p> Description: {posDetail.des}</p>
                                <p>Experience Required: {posDetail.minexp}+ Years</p>
                                <p>Skills Required:
                                    {
                                        posDetail.skills.map((skill:any,index:any)=>{
                                            if(index===posDetail.skills.length-1){
                                                return(skill)
                                            }
                                            else{
                                                return(skill+" ,")
                                            }
                                            
                                        })
                                    }
                                </p>
                            </div>
                        </Box>
                        <Box m={1} p={1}>
                        </Box>
                        <Box m={1} p={1} borderRadius={10} border={2} borderColor="#FFFFFF">
                            
                            <div style={{fontSize:26, color:"#FFFFFF"}}>
                                <Box m={1} p={1}>
                                    Enter Details to Apply:
                                </Box>
                            </div>
                            <div style={{fontSize:20, color:"#FFFFFF", textAlign:"center"}}>
                               <form onSubmit={handleSubmit}>
                                   <Box m={1} p={1}>
                                    <TextField
                                        fullWidth
                                        required
                                        inputProps={{ className: classes.input }}
                                        InputLabelProps={{
                                            style: { color: '#FFFFFF' },
                                          }}
                                        value={candidateDetails.name}
                                        label="Name"
                                        onChange={(e)=>{handleChanges('name',e.target.value)}}
                                    />
                                    </Box>
                                    <Box m={1} p={1}>
                                    <TextField
                                        fullWidth
                                        required
                                        inputProps={{ className: classes.input }}
                                        InputLabelProps={{
                                            style: { color: '#FFFFFF' },
                                          }}
                                        value={candidateDetails.email}
                                        label="Email"
                                        onChange={(e)=>{handleChanges('email',e.target.value)}}
                                    />
                                    </Box>
                                    <Box m={1} p={1}>
                                    <TextField
                                        fullWidth
                                        required
                                        inputProps={{ className: classes.input }}
                                        InputLabelProps={{
                                            style: { color: '#FFFFFF' },
                                          }}
                                        value={candidateDetails.exp}
                                        label="Experience"
                                        type="Number"
                                        onChange={(e)=>{handleChanges('exp',e.target.value)}}
                                    />
                                    </Box>
                                    <Box m={1} p={1}>
                                    <Autocomplete
                                        multiple
                                        id="tags-standard"
                                        options={posDetail.skills}
                                        defaultValue={candidateDetails.skills}
                                        onChange={(event,newValue)=>{
                                            handleChanges('skills',newValue);
                                        }}
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            InputLabelProps={{
                                                    style: { color: '#FFFFFF' },
                                              }}
                                            variant="standard"
                                            label="Choose your matching skills."
                                        />
                                        )}
                                    />
                                    </Box>
                                    <Box m={1} p={1}>
                                    <Button variant="contained" style={{backgroundColor:"#FFFFFF",color:"#000000"}} type="submit">
                                        Submit
                                    </Button>
                                    </Box>
                               </form>
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1} md={3} lg={3} sm={3} >
                </Grid>
            </Grid>):(null)
        }
        {
                openpopup?(
                    <Popup  
                        msg={msg}
                        handleClose={()=>{history.push('/careers')}}
                    />
                ):(null)
        }
        </div>
    )
} 