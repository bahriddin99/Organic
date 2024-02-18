import React from 'react'
import {About} from "../pagess/about"
import {Home} from "../pagess/home"
import {New} from "../pagess/new"
import {Pages} from "../pagess/pages"
import {Projects} from "../pagess/projects"
import {Shop} from "../pagess/shop"



export const main_pages =  [
    {
        component: <Home/>
    },
    {
        component:<About/>,
        path:"about",
    },
    {
        component:<Pages/>,
        path:"pages",
    },
    {
        component:<Shop/>,
        path:"shop",
    },
    {
        component:<Projects/>,
        path:"projects",
    },
    {
        component:<New/>,
        path:"new",
    },
]
