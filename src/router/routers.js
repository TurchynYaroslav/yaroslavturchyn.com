import About from "../pages/About";
import Projects from "../pages/Projects";
import Stack from "../pages/Stack";

export const globalRoutes = [
  { path: "/stack", component: <Stack />, name: "Stack" },
  { path: "/projects", component: <Projects />, name: "Projects" },
  { path: "/about", component: <About />, name: "About" },
];
