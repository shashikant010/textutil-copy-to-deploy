import React from 'react'

export default function Alert(props) {
    const capita=(a)=>{
        let lowercase=a.toLowerCase();
        return lowercase.charAt(0).toUpperCase()+lowercase.slice(1)

    }
  return (
    props.alert&&<div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

    <strong>{capita(props.alert.type)}</strong> {props.alert.msg}
</div>
    </div>
  )
}
