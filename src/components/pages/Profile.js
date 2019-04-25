import React, {Fragment} from 'react';
import Moment from 'react-moment';
import 'moment/locale/tr';

const Profile = ({user}) => {
  const moment = user.created_date;
    return(
    <Fragment>
      <p>Kullanıcı Adı: {user.username}</p>
      <p>Hesap Oluşturulma Tarihi: <Moment fromNow locale="tr">{moment}</Moment></p>
    </Fragment>
  )
}

export default Profile;
