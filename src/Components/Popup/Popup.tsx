import { Button } from "@material-ui/core";
import './styles.css'

export default function ConfigSelectPopup(props:any){
    console.log(props);
    const {msg,handleClose}=props;
    


    return(
        <div className="popup-box">
        <div className="box">
            <div style={{fontSize:30}}>
            {msg}
            </div>
            <div>
            <Button variant="outlined" color="primary" onClick={handleClose}>
                OK
            </Button>
            </div>
        </div>
      </div>
    );
}