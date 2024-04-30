import { useNavigate } from "react-router-dom";

export function navigateToPage(route){
    const navigate = useNavigate();
    return () =>navigate(route);}


    