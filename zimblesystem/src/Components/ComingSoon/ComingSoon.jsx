import React from 'react'
import style from "./Comingsoon.module.css";

const ComingSoon = () => {
    return (
        <div className={style.comingsoon_mainbox}>
            <div>
                <img style={{height:"100%",width:"100%"}} src="https://static.wixstatic.com/media/6d62b3_bbaeb44fc6b04ead8a943ca65cbfe375~mv2.gif" alt="" />
                {/* <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.column}>
                            <h3 className={style.animate_charcter}> Coming Soon</h3>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ComingSoon