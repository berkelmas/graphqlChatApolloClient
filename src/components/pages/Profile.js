import React, {Fragment} from 'react';

const Profile = ({user}) => {
  return(
    <Fragment>
      <p>Kullanıcı Adı: {user.username}</p>
      <p>Hesap Oluşturulma Tarihi: {user.created_date}</p>
    </Fragment>
  )
}

export default Profile;
