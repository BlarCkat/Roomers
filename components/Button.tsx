import { IconType } from "react-icons/lib";

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;

}

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    disabled,
    outline,
    small,
    icon
}) => {
    return ( 
        <>
        <button className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white': 'bg-blue-500'}
        ${outline ? 'border-black': 'border-blue-500'}
        
        `}
        >{label}</button>
        </>
     );
}
 
export default Button;