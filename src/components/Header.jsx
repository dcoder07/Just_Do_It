import React from 'react';

const styles={
    backgroundColor:"#141E46",
    color:'#FFC436'
}
function Header(){
return <div className='relative flex justify-center items-center sm:text-6xl text-3xl rounded-2xl lg:h-[15vh] sm:h-36 h-28 m-8 md:m-4'
 style={styles}>
    <h1 >Just Do It</h1>
</div>
}

export default Header;