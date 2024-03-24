import { useNavigate } from "react-router-dom";


// Initialize constant navigate


// Navigate to Riders page
export function navigateToPage(route){
    const navigate = useNavigate();
    return () =>navigate(route);}


    

