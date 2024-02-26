'use client'

import { useEffect, useState } from "react";

export const Task = (props) => {
    const [checked, check] = useState(props.task.checked);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        if (!changed) {
            return;
        }
        fetch("http://localhost:3000/api/tasks", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: props.task._id, checked: checked})
        }).then(response => response.json())
            .then(updateResult => {
                if (updateResult.modifiedCount < 1) {
                    console.error("Não foi possível atualizar o registro");
                }
            });
    }, [checked, changed]);

    return (<li>
        <button
            onClick={function deletar() {
                props.deletarTarefa(props.task);
            }}
            className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            X
        </button>

        <input type="checkbox"
            className="custom-checkbox m-3"
            checked={checked}
            onChange={(evento) => {
                check(evento.target.checked);
                setChanged(true);
            }}
        />


        {props.task.text}</li>);
}