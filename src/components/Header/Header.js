import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SearchBox } from "../SearchBox/SearchBox";
import { ReactComponent as CoralLogo } from "../../assets/icons/coral-logo.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { ReactComponent as FillUserIcon } from "../../assets/icons/profile-fill.svg";
import { ReactComponent as EmptyCartIcon } from "../../assets/icons/empty-cart.svg";
import { useLogout, useUser } from "../../hooks/useAppAPIs";
import { useState } from "react";
import Link from "@mui/material/Link";
import useCategories from "../../hooks/useCategories";
import { Stack } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";  // Import the custom hook

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { userData, refetchUser } = useUser();
  const userMutation = useLogout();
  const { handleProductsPage } = useSearch(); // Destructure the function from your custom hook

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await userMutation.mutateAsync();
      localStorage.removeItem("token");
      setTimeout(async () => {
        await refetchUser();
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const { categoryData } = useCategories();
  const categoriesData = categoryData?.categories;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <CoralLogo />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Stack direction="row">
            {categoriesData &&
              categoriesData?.map((category) => (
                <MenuItem key={category.id} onClick={handleCloseNavMenu}>
                  <Typography
                    variant={"h4"}
                    component={"h2"}
                    sx={{ color: "black" }}
                    textAlign="center"
                    onClick={() =>
                      navigate(
                        `/products?categoryID=${category.id}&categoryName=${category.title}`
                      )
                    }
                  >
                    {category.title}
                  </Typography>
                </MenuItem>
              ))}
          </Stack>
        </Box>

        {/* Updated SearchBox handling */}
        <Box
          sx={{
            backgroundColor: "accent.main",
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            width: "362px",
            height: "44px",
            mr: "15px",
          }}
        >
          <SearchBox onSearch={handleProductsPage} />
        </Box>

        <Box sx={{ flexGrow: 0, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <IconButton
              onClick={() => navigate("/my-wishlist")}
              sx={{ p: 0, mr: "5px", color: "primary.main" }}
            >
              <FavoriteBorderIcon />
            </IconButton>

            {userData ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    onClick={handleClick}
                    sx={{
                      display: "flex",
                      p: 0,
                      mr: "5px",
                      color: "primary.main",
                      alignSelf: "center",
                    }}
                  >
                    <FillUserIcon />
                  </IconButton>
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/user-profile/info");
                      handleClose();
                    }}
                  >
                    View Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton
                onClick={() => navigate("/sign-in")}
                sx={{ p: 0, mr: "5px", color: "primary.main" }}
              >
                <UserIcon />
              </IconButton>
            )}

            <Link href={"/my-cart"} sx={{ marginTop: "8px", display: "block" }}>
              <EmptyCartIcon />
            </Link>
          </div>
        </Box>
      </Toolbar>
      {userData && (
        <Typography
          sx={{
            color: "primaryTint.main",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1rem",
            marginTop: "-1rem",
          }}
        >
          Hello {userData.firstName}
        </Typography>
      )}
    </AppBar>
  );
};

export default Header;
