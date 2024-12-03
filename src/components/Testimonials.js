import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
<style>
{`
    /* Center alignment and responsive card styles */
    #portfolio {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .grid {
        justify-content: center;
        align-items: center;
    }

    button {
        cursor: pointer;
        font-size: 1.5rem;
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .testimonial-card {
        width: 300px;
        height: 500px;
        background-color: white;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        color: #4a4a4a;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 1rem;
    }

    .testimonial-title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
    }

    .testimonial-content {
        font-size: 1rem;
        line-height: 1.5;
        text-align: justify;
    }

    .navigation-button {
        background-color: #9b1d6e;
        color: white;
        border-radius: 50%;
        padding: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .navigation-button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
         @media (max-width: 450px) {
        .testimonial {
            width: 300px; /* Make cards responsive */
            height: 400px; /* Allow height to adjust */
            padding-left: 10        }

        .testimonial-title {
            font-size: 1.2rem; /* Adjust title size */
        }

        .testimonial-content {
            font-size: 0.9rem; /* Adjust content size */
        }


    }

`}
</style>
                <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">Testimonials</h2>
                 <div className='flex justify-center'>
                     <div className='w-24 border-b-4 border-fuchsia-900 mb-8'></div>
                 </div>

                 <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                     <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">  
                        <div className="testimonial bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700  rounded-lg shadow-2xl p-3 min-h-max w-[150] h-[300px]">
                        {/* <div className="testimonial">                           */}
                             <div className="m-2 text-justify text-sm">
                                 <p className="text-md font-medium leading-5 h-auto md:h-48 pt-20">
                                     Our Busin Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quia.
                                 </p>
                                 <h4s className="font-semibold pt-10 my-4 text-lg md:text-xl text-center mb-4 h-12">-Meta Arts Pvt Ltd.</h4s>
                               
                             </div>
                         </div>
                         {/* </div> */}

                         <div className=" testimonial bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700  rounded-lg shadow-2xl p-3 w-[250] h-[400px]">
                             <div className="m-2 text-justify text-sm">
                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">HDFC Bank</h4>
                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
                                     Our all encompassing School Management Portal is the only solution needed for any institution.
                                     The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. 
                                     The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.
                                 </p>
                             </div>
                         </div>

                         <div className=" testimonial bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700  rounded-lg shadow-2xl p-3 w-[250] h-[400px]">
                             <div className="m-2 text-justify text-sm">
                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">ABB</h4>
                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
                                     The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as: 
                                     increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
                                 </p>
                                
                             </div>
                         </div>

                         <div className=" testimonial bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700  rounded-lg shadow-2xl p-3 w-[250] h-[400px]">
                             <div className="m-2 text-justify text-sm">
                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Rochem Separations</h4>
                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
                                     The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as: 
                                     increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
                                 </p>
                                   </div>
                         </div>

                         <div className=" testimonial bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700  rounded-lg shadow-2xl p-3 w-[250] h-[400px]">
                             <div className="m-2 text-justify text-sm">
                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Genesis Creativity</h4>
                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
                                     Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
                                    With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.
                                </p>
                                 <div className="flex justify-center my-4 p-10">
                                 </div>
                             </div>
                         </div>                    
                     </div>
                 </div>
             </div>
         </>
    )
}

export default Testimonials;
