import React from 'react'

function Feature(props) {
  return (
//    Start Features section
<div className="flex justify-center items-center flex-col min-h-[100vh] min-h-screen w-[100%] flex-wrap bg-[#F5F5F5]">
       
        {/* Cart Benefits */}
        <div  className='flex justify-center gap-[100px] items-center min-h-[50vh] text-center max-sm:mt-[2rem] gap-[0px] max-sm:flex-col max-sm: mb-8'>
            {/* Cart 1 */}
            <div className='flex items-center flex-col mb-4'>
            <img className='max-w-[90%]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Feature 1</h3>
            <p className=' text-center max-w-[60%]'>Talk about some of the details of your offer with a focus on the value people get back.

.
</p>
            </div>
            {/* Cart 2 */}
            <div className='flex items-center flex-col mb-4'>
            <img className='max-w-[90%]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Feature 2</h3>
            <p className=' text-center max-w-[60%]'>Is there a pain point that your product or service resolves? Tell visitors about it here.
.
</p>
            </div>
            {/* Cart 3 */}
            <div className='flex items-center flex-col mb-5'>
            <img className='max-w-[90%]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Feaute 3</h3>
            <p className=' text-center max-w-[60%]'>you could use this section to address some frequently asked questions.

.
</p>
            </div> 
        </div>
    </div>
  )
}

export default Feature