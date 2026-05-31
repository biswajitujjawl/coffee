import reserveImg from '../Images/reverseImg.png';
import ReserveContactForm from './ReserveContactForm';
const Reserve=()=>{
    return(
        <div className='bg-[#221518] py-10 md:pt-5 md:pb-[110px]'>
            <h1 className='hero-heading text-center pb-5 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent'>Reserve a Table</h1>
            <div className='bg-[#593a2d]'>
            <div className="container mx-auto bg-[#593a2d] py-7 w-[80%]">
                <div className="flex md:flex-row flex-col items-center">
                    <div className="w-full md:w-[50%]">
                        <img src={reserveImg} alt="" className='max-h-[350px] mx-auto' />
                    </div>
                    <div className="w-full md:w-[50%] p-2 md:pl-[30px] ">
                        <ReserveContactForm/>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}
export default Reserve;