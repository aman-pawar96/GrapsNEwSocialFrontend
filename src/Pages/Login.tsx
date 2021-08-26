import NavigationBar from "../Components/NavigationBar";
import {Box,TextField,makeStyles,Button} from '@material-ui/core'
import axios from 'axios'
import {useState} from 'react'
import { useHistory } from "react-router";
import Popup from '../Components/Popup/Popup'

const useStyles = makeStyles((theme) => ({
    input: {
      color: "#FFF",
    },
}));

export default function Login(){
    let history= useHistory();
    const classes= useStyles();
    const [loginDetails,setLoginDetails]:any=useState({});
    const msg="Invalid Email or Password"
    const [openpopup,setOpenPopup]=useState(false);
    const handleSubmit =(event:any)=>{
        event.preventDefault();
        axios.post(`http://localhost:4000/demo/login`,
        loginDetails)
        .then((response)=>{
            console.log(response);
            if(response.data.success){
                localStorage.setItem('authenticated','true');
                history.push('/candidates');
            }
            else{
                setOpenPopup(true);
            }
            
        })
    }

    const handleChanges = (key:string,value:any)=>{
        let details=loginDetails;
        details[key]=value;
        setLoginDetails(details);

    }
    return(
        <div style={{background:"#000000",height:"100%"}} >
            <NavigationBar/>
            <div style={{height:532,textAlign:"center",alignItems:"center"}}>
            <Box p={2} borderRadius={10} border={5} borderColor="#FFFFFF" width="30%" style={{marginLeft:"35%", marginTop:"10%"}}>
            <form onSubmit={handleSubmit}>
                                   <Box m={1} p={1}>
                                    <TextField
                                        required
                                        inputProps={{ className: classes.input }}
                                        InputLabelProps={{
                                            style: { color: '#FFFFFF' },
                                          }}
                                        value={loginDetails.email}
                                        label="Email"
                                        onChange={(e)=>{handleChanges('email',e.target.value)}}
                                    />
                                    </Box>
                                    <Box m={1} p={1}>
                                    <TextField
                                        required
                                        inputProps={{ className: classes.input }}
                                        InputLabelProps={{
                                            style: { color: '#FFFFFF' },
                                          }}
                                        value={loginDetails.password}
                                        label="Password"
                                        type="Password"
                                        onChange={(e)=>{handleChanges('password',e.target.value)}}
                                    />
                                    </Box>
                                    <Button variant="contained" style={{backgroundColor:"#FFFFFF",color:"#000000"}} type="submit">
                                        Login
                                    </Button>
                                    </form>
            </Box>
            </div>
            {openpopup?
            (<Popup
                msg={msg}
                handleClose={()=>{setOpenPopup(false)}}
            />):(null)}
        </div>
    )
}