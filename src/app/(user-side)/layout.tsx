import  "../globals.css"
import Footer from "@/src/components/user/footer"
import Header from "@/src/components/user/header"





const User_side_layout=({children}:{children:React.ReactNode})=>{
   
    return (
        <>
        <Header />
            {children}
        <Footer/>/
        </>
    )
}


export default User_side_layout