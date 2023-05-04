import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { ModifyImage } from "./style"

export function ModalModifyImage() {
    const { modalModifyImage, setModalModifyImage, changeImageProfile, profile} = useContext(UserContext)

    const [ valueInput, setValueInput] = useState('')

    return (
        <>
            {modalModifyImage && (
                <ModifyImage>
                    <div className="dialog">
                        <div className="box__header">
                            <h2>Url da Imagem</h2>
                            <button type='button' className="button__close" onClick={() => setModalModifyImage(false)}>X</button>
                        </div>
                        <input type="url" onChange={(event) => setValueInput(event.target.value)}/>
                        <button type="submit" className="button__edit" onClick={() => {changeImageProfile(valueInput, profile!), setModalModifyImage(false)}}>Editar </button>
                    </div>
                </ModifyImage>
            )}

        </>
    )
}