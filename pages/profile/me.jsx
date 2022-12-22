import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, TextField, Avatar } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";

import React, { useState, useEffect } from "react";
import {
  TxtField,
  ProfileContainer,
  EditProfileForm,
  EditProfileLinkBtn,
} from "../../styles/me.module";
import { useDispatch, useSelector } from "react-redux";
import { changeAvatar } from "../../src/store/actions/authActions";

import { Title } from "../../styles/me.module";
import withAuth from "../../src/withAuth";

function Me() {
  const [state, setState] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    avatarPreview: "",
  });
  const dispatch = useDispatch();
  const { email, profile, avatar, first_name, last_name } = useSelector(
    (state) => state.authReducer
  );

  console.log(`userinfo is: ${profile}`);

  const handleAvatar = async (e) => {
    try {
      const file = e.target.files[0];
      // dispatch(changeAvatar(body));
      changeAvatar(file);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <ProfileContainer maxWidth="sm">
        <Grid
          container
          spacing={5}
          p="2 5"
          columns={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 0 }}>
          <Title>Edit Profile</Title>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columns={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
            maxWidth="100%">
            <label htmlFor="upload-avatar">
              <Avatar
                alt="userAvatar"
                src={avatar}
                sx={{ height: 150, width: 150 }}
              />
              <input
                type="file"
                hidden
                id="upload-avatar"
                onChange={handleAvatar}
              />
            </label>
          </Grid>
          <Grid item columns={{ xs: 2, sm: 4, md: 4 }} sx={{ p: 5 }}>
            <EditProfileForm>
              <TxtField
                disabled
                id="username"
                label="Username"
                name="username"
                value={profile || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="email"
                label="Email"
                name="email"
                value={email || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="firstName"
                label="First Name"
                name="first_name"
                value={first_name || ""}
                variant="filled"></TxtField>
              <TxtField
                disabled
                id="lastName"
                label="Last Name"
                name="last_name"
                value={last_name || ""}
                variant="filled"></TxtField>

              <EditProfileLinkBtn
                href="/profile/edit"
                variant="outlined"
                endIcon={<EditIcon />}>
                Edit Profile
              </EditProfileLinkBtn>
            </EditProfileForm>
          </Grid>

          <Grid item xs="auto"></Grid>
        </Grid>
      </ProfileContainer>
    </React.Fragment>
  );
}
export default withAuth(Me);
