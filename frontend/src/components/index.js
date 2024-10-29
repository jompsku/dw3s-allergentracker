import { Box, Container, CssBaseline, Typography } from "@mui/material"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Footer from "./Footer"
import GeneralInfoPage from "./pages/GeneralInfoPage"
import Header from "./Header"
import IconButton from "@mui/material/IconButton"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import theme from "../themes/theme"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import UserPreferences from "./pages/UserPreferences"

export {
  AccountCircleSharpIcon,
  AppBar,
  Box,
  BrowserRouter,
  Button,
  Container,
  CssBaseline,
  Footer,
  GeneralInfoPage,
  Header,
  IconButton,
  LandingPage,
  LoginPage,
  Menu,
  MenuItem,
  Navigate,
  Route,
  Routes,
  theme,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  UserPreferences,
  useState,
}
