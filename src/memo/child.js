import React from 'react'
const MemoChild = (props) => {
	console.info(2222)
	return <div>{props.name.age}</div>
}
export default MemoChild
