import services1 from '../Images/sercices1.png';
import services2 from '../Images/sercices2.png';
import services3 from '../Images/sercices3.png';
import services4 from '../Images/sercices4.png';
import services5 from '../Images/sercices5.png';
const Services=()=>{

    const ServiceData=[
        {id:1,image:services1,title:'Equipment',imgClass:'w-[70px] h-[80px]'},
        {id:2,image:services2,title:'Type Of Coffee',imgClass:'w-[102px] h-[75px]'},
        {id:3,image:services3,title:'Take A Way',imgClass:'w-[70px] h-[80px]'},
        {id:4,image:services4,title:'Beans Variant',imgClass:'w-[70px] h-[80px]'},
        {id:5,image:services5,title:'Pastry',imgClass:'w-[70px] h-[80px]'}
    ];

    return(
        <div className='bg-[#221518] py-16 md:pt-16 md:pb-[150px]'>
            <h1 className='hero-heading text-center pb-5 text-[64px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent'>Services</h1>
            <div className="container mx-auto w-[80%]">
                <div className="flex flex-wrap justify-center gap-5 md:gap-8">

                    {ServiceData.map((item)=>(
                        <div key={item.id} className='bg-[#54372b] rounded-[25px] w-[150px] sm:w-[170px] min-h-[180px]
                        flex flex-col items-center justify-center px-4 py-8'>
                            <img src={item.image} alt={item.title} className={`${item.imgClass} object-contain`} />

                            <p className="pt-5 text-[13px] md:text-[14px] text-center text-[#F8E4BE]">
                {item.title}
              </p>
                        </div>
                    ))}


                        {/* <div className="w-full md:w-[20%] flex items-center">
                        <div className='bg-[#54372b] py-10 px-5 rounded-[25px]'>
                         <img src={services1} alt="Cup" className='w-[74px] h-[105px]' /> 
                         <p className='pt-5 text-[14px] text-center text-[#F8E4BE]'>Equipment</p>  
                        </div>
                    </div>


                    <div className="w-full md:w-[20%] flex items-center">
                        <div className='bg-[#54372b] py-10 px-5 rounded-[25px]'>
                         <img src={services2} alt="Cup" className='w-[102px] h-[55px]' /> 
                         <p className='pt-5 text-[14px] text-center text-[#F8E4BE]'>Equipment</p>  
                        </div>
                    </div>
                    <div className="w-full md:w-[20%]"></div>
                    <div className="w-full md:w-[20%]"></div>
                    <div className="w-full md:w-[20%]"></div> */}

                </div>
            </div>
        </div>
    );
}
export default Services;