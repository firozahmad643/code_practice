import React from 'react'

export default function Alert(props) {

    return (
        <div style={{ height: "40px", marginTop: "57px" }}>
            {props.alert &&
                <div>
                    <div className={`alert alert-${props.mode === 'light' ? "primary" : "danger"} alert-dismissible fade show`} role="alert">
                        {(props.alert)}
                    </div>
                </div>}
        </div>
    )
}
