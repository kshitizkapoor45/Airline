import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {

   const {pathname} = useLocation();
   const pathnames = pathname.split("/").filter((x) => x);
   let breadcrumbpath = ''
  return (
    <>
      {pathnames.length > 0 && <Link to={"/"}>Home</Link>}
    {
        pathnames.map((name,index) => {
           breadcrumbpath += `/${name}`
           const isLast = index===pathnames.length-1;

           return isLast ? <span>/{name}</span> :
           (
             <span key={breadcrumbpath}>
                /<Link to={breadcrumbpath}>{name}</Link>
             </span>
           )

        })
    }
    </>
  )
}

export default Breadcrumbs