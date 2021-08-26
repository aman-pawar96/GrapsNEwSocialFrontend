import { AppBar,Toolbar,Box,Grid,Button, } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo from '../Constants/Images/logo.png'


export default function NavigationBar(){
    let history= useHistory();
    const authenticated = localStorage.getItem('authenticated');

    return(
        <AppBar position="sticky" style={{background:"#000000"}}>
            <Toolbar>
                <Grid container>
                    <Grid xs={2} sm={2} lg={2} md={2}>
                        <img src={Logo} height={30}/>
                    </Grid>
                    {
                        authenticated!=='true'?(
                        <>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                <Button
                                    onClick={()=>{history.push('/aboutus')}}
                                    style={{color:"#FFFFFF"}}
                                >
                                    About us
                                </Button>
                                
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                <Button
                                    onClick={()=>{history.push('/careers')}}
                                    style={{color:"#FFFFFF"}}
                                >
                                Career
                                </Button>
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                <Button
                                    onClick={()=>{history.push('/login')}}
                                    style={{color:"#FFFFFF"}}
                                >
                                    login
                                </Button>
                            </Grid>
                        </>):(
                            <>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                
                                
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} md={2}>
                                <Button
                                    onClick={()=>{localStorage.setItem('authenticated','false'); history.push('/aboutus');}}
                                    style={{color:"#FFFFFF"}}
                                >
                                    logout
                                </Button>
                            </Grid>
                            </>)
                    }
                </Grid>
               
            </Toolbar>
        </AppBar>
    )
}