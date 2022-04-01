
// import { Link } from "react-router-dom";


import React from 'react'
import { TableRow, TableCell, makeStyles } from '@material-ui/core'
import { footers } from '../Constants/Data'

const useStyle = makeStyles({

    // table: {
    //     // border: '1px solid rgba(224, 224, 224, 1)',
    //     height: '10px',
    //     fontSize: '8px'
    // },

cell:{
    fontSize: '10px'
},



    textCenter: {

        fontSize: '8px',
        justifyItems: 'center'

    }



}

)


const Footer = () => {

    const classes = useStyle();

    return (
        <>
           
                    {
                        footers.map(footer => (
                            <TableRow className={classes.row}>
                                <TableCell className={classes.cell}>{footer}</TableCell>
                            </TableRow>


                        )
                        )
                    }

               
            <div className=" ftr-mnu-rw ftr-mnu-cp-rt">

                <p className={classes.textCenter}>Copyright 2018 &copy; taxandlaw18 </p>

            </div>
        </>
    )

}



export default Footer

