import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import UserCircle from '../../assets/UserCircle.png';
import { StyledProfilePage } from './style';
import { ProfileHeader } from '../../components/ProfileHeader';

export function ProfilePage() {
  const { profile } = useContext(UserContext);
  return (
    <>
      <ProfileHeader />
      <StyledProfilePage>
        <div className="page__controller">
        <div className="info__primary">
          <img className="user__circle" src={UserCircle}></img>
          <h1>{profile?.name}</h1>
        </div>
        <div className="info__secondary">
          <div className="birth__date">
            <h2>Data de Nascimento: </h2>
            <span>{profile?.birthDate}</span>
          </div>

          <div className="profile__mail">
            <h2>E-mail:</h2> <span>{profile?.email}</span>
          </div>
        </div>
        <button className="open__modal__profile">+</button>
        <div className="divider__box"></div>
        </div>
      </StyledProfilePage>
    </>
  );
}
