import { useAuth } from 'presentation/app/hooks/useAuth';
import ProfileView from './view';

const ProfileIndex = () => {
  const { currentUser } = useAuth();
  return <ProfileView currentUser={currentUser} />;
};

export default ProfileIndex;
