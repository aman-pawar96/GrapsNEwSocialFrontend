import NavigationBar from "../Components/NavigationBar"
import {Box,Grid} from '@material-ui/core'
import aboutus from '../Constants/Images/aboutus.png'
import missions from '../Constants/Images/missions.png'
import vision from '../Constants/Images/vision.png'

export default function AboutUs(){
    return(
        <div style={{background:"#000000"}}>
        <NavigationBar/>
        <div style={{background:"#000000"}}>
            <Box m={3} p={3}>
                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div style={{textAlign:"center"}}>
                                <img src={aboutus}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={8}>
                            <div style={{fontSize:30,color:"#90EE90"}}>
                                About Us
                            </div>
                            <div style={{fontSize:18,color:"#FFFFFF",textAlign:"justify"}}>
                                <p >
                                    Graps Next Social Private Limited is incorporated in the year 2020 and we are a modern communication and technology based company who provide data driven solutions to your business using Artificial Intelligence, over the years we have generated good to best services with our team on front head working to meet the expectations of our clients, who are our priorities. Our company also works on transforming your data into an impactful insight which helps you grow in numbers, in your business we believe to work in details that will leave no stone unturned regarding the lead that your company will generate in huge. We believe in our work and let everyone believe in our service. Everything is looked after under minute supervision, we here work not only to provide better service but also to build our mark and then it speaks for itself. Professionalism should be our prefix, ever since we have started we have promised to honour the clients belief in us and we are going strong on it.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box m={3} p={3}>
                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} md={8} lg={8}>
                            <div style={{fontSize:30,color:"#90EE90"}}>
                                Our Mission
                            </div>
                            <div style={{fontSize:18,color:"#FFFFFF",textAlign:"justify"}}>
                                <p >
                                Since the day GRAPS was commenced we took this Idea seriously to eliminate the every possible obstacle that has been there ever since and build a bridge between the IT industry and that to the business world and make it prosper in no time. To unleash the power of AI is what we speak for and We will extend our services to all the industries possible. 
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <div style={{textAlign:"center"}}>
                                <img src={missions} height={250}/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box m={3} p={3}>
                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <div style={{textAlign:"center"}}>
                                <img src={vision} height={250}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={8}>
                            <div style={{fontSize:30,color:"#90EE90"}}>
                                Our Vision
                            </div>
                            <div style={{fontSize:18,color:"#FFFFFF",textAlign:"justify"}}>
                                <p >
                                    Since the day GRAPS was commenced we took this Idea seriously to eliminate the every possible obstacle that has been there ever since and build a bridge between the IT industry and that to the business world and make it prosper in no time. To unleash the power of AI is what we speak for and We will extend our services to all the industries possible. 
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </div>
    )
}