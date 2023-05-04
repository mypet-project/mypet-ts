import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IRegisterPet, PetContext } from "../../providers/PetContext";
import { UserContext } from "../../providers/UserContext";
import {
  createPostSchema,
  TCardFormValues,
} from "../../validations/createPostSchema";
import { CreateCard } from "./style";

export function CreateCardModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCardFormValues>({
    resolver: zodResolver(createPostSchema),
  });

  const { profile } = useContext(UserContext);
  const { setCreateCardModal, registerPet } = useContext(PetContext);

  function closeModal() {
    setCreateCardModal(false);
  }

  const profileId = profile?.id;

  function submit(formData: IRegisterPet) {
    registerPet(formData, profileId);
  }

  return (
    <CreateCard>
      <form className="card__modal" onSubmit={handleSubmit(submit)}>
        <div className="title__and__button">
          <h2>Título</h2>{" "}
          <span
            className="exit__button"
            onClick={(e) => {
              closeModal();
            }}
          >
            X
          </span>
        </div>
        <input type="text" {...register("name")} />
        <h2>Imagem</h2>
        <input type="text" {...register("img")} />
        <h2>Descrição</h2>
        <textarea className="modal__textarea" {...register("description")} />
        <h2>Está para adoção?</h2>
        <select className="adoption__select" {...register("adoption")}>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <button type="submit" className="post__button">
          Postar
        </button>
      </form>
    </CreateCard>
  );
}
