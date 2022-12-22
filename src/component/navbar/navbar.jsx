import React, { useEffect } from "react"
import {
  Root,
  NavLink,
  LinkLogo,
  DivLink,
  Auth,
  ButtonSignIn,
  ButtonSignUp,
  Username,
} from "./styled"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import Logout from "@mui/icons-material/Logout"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import { orange } from "@mui/material/colors"
import Leaderboard from "@mui/icons-material/Leaderboard"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../store/actions/authActions"
import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import Link from "next/link"
export default function Navbar() {
  const profile = useSelector((state) => state.authReducer.profile)
  const avatar = useSelector((state) => state.authReducer.avatar)
  const dispatch = useDispatch()
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    await dispatch(getProfile());
  };

  const handleLogout = async () => {
    localStorage.removeItem("_q")
    // localStorage.removeItem('user')
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <LinkLogo>LOGO</LinkLogo>
      <DivLink>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/games-list">Game</NavLink>
        <NavLink href="/#testimony">Testimony</NavLink>
        <NavLink href="/#news">News</NavLink>
      </DivLink>
      <Auth>
        {profile === null ? (
          <>
            <ButtonSignIn href="/auth/login">Sign In</ButtonSignIn>
            <ButtonSignUp href="/auth/register">Sign Up</ButtonSignUp>
          </>
        ) : (
          <>
            <span>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? "true" : undefined}>
                  <Username>{profile && profile}</Username>
                  <Avatar
                    sx={{ width: 32, height: 32, color: orange[500] }}
                    src={avatar}
                  />
                </IconButton>
              </Tooltip>
            </span>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              <Link href="/profile/me" sx={{ textDecoration: "none" }}>
                <MenuItem>
                  <Avatar fontSize="small" src={avatar} alt="userAvatar" />{" "}
                  Profile
                </MenuItem>
              </Link>
              <Divider />
              <Link href="/scoreboard">
                <MenuItem>
                  <ListItemIcon>
                    <Leaderboard fontSize='small' />
                    &nbsp;&nbsp;&nbsp;&nbsp;Scoreboard
                  </ListItemIcon>
                </MenuItem>
              </Link>
              <MenuItem>
                <ListItemIcon onClick={handleLogout}>
                  <Logout fontSize="small" />
                  &nbsp;&nbsp;&nbsp;&nbsp;Logout
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </>
        )}
      </Auth>
    </Root>
  )
}
