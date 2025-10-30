// 'use client'
// import React from 'react'
// import { Provider } from 'react-redux'
// import store from '@/redux/store'

// export default function StoreProvider({children}) {
//   return (
         
//          <Provider store ={store}>
//            {children} 
//          </Provider>
//   )
// }


'use client'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import store from '@/redux/store'
import { lstoUser } from '@/redux/features/userSlice'

// Component to initialize user from localStorage
function InitUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hydrating user from localStorage...");
    dispatch(lstoUser());
  }, [dispatch]);

  return null;
}

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <InitUser />
      {children}
    </Provider>
  )
}
