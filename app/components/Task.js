'use client'
export const Task = (props) => {
    return (<li>
        <button
            onClick={function deletar() {
                props.deletarTarefa(props.task);
            }}
            className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">X
        </button>

        <input type="checkbox"/>

        {props.task.text}</li>);
}