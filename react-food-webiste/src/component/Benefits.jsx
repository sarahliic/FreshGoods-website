import React from 'react'

function Benefits() {
  return (
    // start Benefits Section
    <div className="flex justify-center items-center flex-col min-h-[100vh] min-h-screen w-[100%] flex-wrap ">
        {/* section Title */}
        <div className='text-center '>
            <h1 className=' text-5xl text-[#304847] mb-[1rem]'>Here are some of the benefits <br /> of your offer</h1>
            <p className="min-w-fit">Explain What makes your product or service great. Talk about feaatures in a way <br /> that highlights the real value people get out of them.</p>
        </div>
        {/* Cart Benefits */}
        <div  className='flex justify-center gap-[100px] items-center min-h-[50vh] text-center flex-wrap max-sm:mt-[2rem] gap-[50px]'>
            {/* Cart 1 */}
            <div className='flex items-center flex-col'>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Benefits 1</h3>
            <p className=' text-center'>For example, restaurants and <br /> bakeries could outline the <br />health benefits of their all- <br />natural ingredients.
</p>
            </div>
            {/* Cart 2 */}
            <div className='flex items-center flex-col'>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Benefits 2</h3>
            <p className=' text-center'>Florists and other small retailers <br /> might use this space to describe <br /> how their products make <br />delightful, one-of-a-kind gifts.</p>
            </div>
            {/* Cart 3 */}
            <div className='flex items-center flex-col'>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="icon-img" />
            <h3 className='text-[#304847] font-bold mt-4 text-2xl'>Benefits 3</h3>
            <p className=' text-center'>You could also add buttons to <br />this section and share links to <br />other products or available <br />delivery methods.</p>
            </div> 
        </div>
    </div>
  )
}

export default Benefits