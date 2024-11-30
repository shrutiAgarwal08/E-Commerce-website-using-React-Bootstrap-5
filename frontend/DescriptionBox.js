import React from 'react'
const DescriptionBox = () => {
    return (
        <div className='row overflow-hidden  mx-5 my-4'>
            <span className='col-md-2 col-sm-6 col-6 border border-1 px-5 py-3 descriptionBoxNavigator'>Description</span>
            <span className='col-md-2 col-sm-6 col-6 border border-1 px-5 py-3 descriptionBoxNavigator'>Reviews(121)</span>
            <span className='col-md-12 col-sm-12 col-12 border border-1 px-5 py-3 descriptionBoxDescription'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </span>
        </div>
    )
}
export default DescriptionBox;
