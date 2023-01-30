import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        min-width: ${minWidth};
        color: white;
        border-radius: 24px;
        border: 1px solid #3B82F6;
        &:hover {
            background: rgba(59, 130, 246, 0.8);
            border-radius: 1px solid rgba(59, 130, 246, 0.8);
        }
        &:active {
            background: rgba(15,23,42,0.6);
            border: 1px solid rgba(15,23,42,0.6);
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;