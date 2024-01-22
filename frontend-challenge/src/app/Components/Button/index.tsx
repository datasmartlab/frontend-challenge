import { Button} from "./style"
type ButtonProps = {
    Title: string;
    border?: "xl" | "md" | "sm";
    color?: string;
    onClick: (e: any) => void;
    backgroundColor?: string;
    width?: "xl" | "md" | "sm";
    style?: React.CSSProperties; // Change to React.CSSProperties
  };
const initialState:ButtonProps = {
    Title: '',
    onClick: (e:any)=>{},
    border: "xl",
    color: "white",
    backgroundColor: "green"
}
const ButtonCustom = (props:ButtonProps = initialState) =>{
    
    return(
        <Button $params={props} style={props.style} onClick={props.onClick}>
            {props.Title}
        </Button>
    )
}
export default ButtonCustom;