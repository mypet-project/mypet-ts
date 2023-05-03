import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IEditPet, IPetData, PetContext } from "../../providers/PetContext";
import { UserContext } from "../../providers/UserContext";
import { editPostSchema, TEditValues } from "../../validations/editPostSchema";
import { PetModalCard } from "./style";

export function PetModal() {
  const { petData, setPetCardModal, deletePet, editPet } = useContext(PetContext);

  const [petName, setPetName] = useState<string | undefined>(petData?.name)
  const [petDescription, setPetDescription] = useState<string | undefined>(petData?.description)
  
  const { register, handleSubmit } = useForm<TEditValues>({
    resolver: zodResolver(editPostSchema),
  });

  const { profile } = useContext(UserContext);

  function closeCardModal() {
    setPetCardModal(false);
  }

  function submit(formData: IEditPet) {
    editPet(formData, petData?.id)
  }

  return (
    <PetModalCard>
      <div className="pet__modal">
        <form onSubmit={handleSubmit(submit)}>
          <div className="title__and__button">
            {petData?.userId === profile?.id ? (
              <input type="text" value={petName} onInput={(e) => {setPetName(e.currentTarget.value)}} {...register("name")} />
            ) : (
              <h1>{petData?.name}</h1>
            )}

            <span
              className="exit__button"
              onClick={() => {
                closeCardModal();
              }}
            >
              X
            </span>
          </div>
          <img src={petData?.img} />
          {petData?.adoption === "Sim" ? (
            <p className="available__adopt">Para adoção</p>
          ) : (
            <p className="cant__adopt">Não está para adoção</p>
          )}
          {petData?.userId === profile?.id ? (
            <textarea
              value={petDescription} onInput={(e) => {setPetDescription(e.currentTarget.value)}}
              {...register("description")}
            />
          ) : (
            <span className="pet__description">{petData?.description}</span>
          )}

          <div className="buttons__and__credits">
            <div className="credits__div">
              {petData?.userId === profile?.id ? (
                <h2>Por {profile?.name}</h2>
              ) : (
                <h2>Por Outro Usuário</h2>
              )}
            </div>

            {petData?.userId === profile?.id ? (
              <button className="edit__button" type="submit">Editar</button>
            ) : null}
            <button
              className="remove__button"
              onClick={() => {
                deletePet(petData?.id as number), closeCardModal();
              }}
            >
              Remover
            </button>
          </div>
        </form>
      </div>
    </PetModalCard>
  );
}
