import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    document.title=`${title}-CarPlayground`
   },[title])
};

export default useTitle;