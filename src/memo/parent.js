import React, { memo, useState } from 'react'
import MemoChild from './child'

const TranChild = memo(MemoChild)
const MemoParent = () => {
	let [count, setCount] = useState(0)
	let [human, setHuman] = useState({ name: '22', age: 11 })
	console.info(human, 'human')
	return (
		<div>
			<div>{count}</div>
			<button
				onClick={() => {
					setCount(count + 1)
					// 修改对象里的属性子组件并不会重新渲染
					human.age++
					setHuman(human)
					// 整个对象修改子组件会重新渲染
					// setHuman((prevState) => {
					// 	return {
					// 		...prevState,
					// 		age: prevState.age++
					// 	}
					// })
				}}
			>
				加1
			</button>
			{/* 点击加1一次就会触发MemoChild重新渲染 */}
			{/* <MemoChild name={22}></MemoChild> */}
			{/* 传入值属性时，没更改时不会重新渲染，这时用memo是有效的 */}
			{/* <TranChild name={22}></TranChild> */}
			{/* 正常，更改时会重新渲染子组件 */}
			{/* <TranChild human={{ name: '22', count }}></TranChild> */}
			<TranChild name={human}></TranChild>
		</div>
	)
}
export default MemoParent
